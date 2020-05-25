from flask import Flask, g, request, Response, make_response, session, render_template, Markup
from datetime import datetime, timedelta
from dateutil.relativedelta import relativedelta

true = True
false = False

app = Flask(__name__)
app.debug = True

app.config['SERVER_NAME'] = 'dev-python.py.web:5000'

# app.secret_key = 'abcde'

app.config.update(
    SECRET_KEY = 'abcde',
    SESSION_COOKIE_NAME = 'qwerty',
    PERMANENT_SESSION_LIFETIME = timedelta(minutes=1)
)

# app.jinja_env.trim_blocks = True

# middleware - preroute /or /request web filter
@app.before_request
def before_request():
    print('pre')
    g.str1 = '한글 ' # set global variable. 
        # in php : define(str1, '한글')

@app.before_first_request
def before_first_request():
    print('prepre')

# template filter
@app.template_filter('ymd')
def ymd(dt, fmt='%m/%d', html=''):
    if isinstance(dt, date):
        dt = dt.strftime(fmt)
    if html is not '':
        return "<{}>{}</{}>".format(html, dt, html)
    return dt

@app.template_filter('rel_date')
def rel_date(dt, year=0, month=0, day=0):
    return dt + relativedelta(years=year, months=month, days=day)

# routes
@app.route("/")
def welcome():
    return "Hello Flask~?"

@app.route("/tutorial/01")
def tuto1():
    return getattr(g, 'str1', 'str1 is not define yet') # 3rd arg means default value if not define str1

@app.route("/tutorial/02")
def tuto2():
    res = Response("message for show", 200, {'custom-header' : 'the header value'})
    return make_response(res)

@app.route("/tutorial/03")
def tuto3():
    #wsgi
    def application(env, res):
        body = 'Method : %s' % env['REQUEST_METHOD']
        res(200, [('Content-Type', 'text/plain; charset=utf-8'), ('Content-Length', str(len(body)))])
        return [body]
    return make_response(application)

@app.route("/tutorial/04/<param1>", methods=['GET', 'POST'])
def tuto4(param1):
    return param1

@app.route("/tutorial/05/<page>", defaults={'page': 'index'})
def tuto5(page):
    return page

@app.route("/tutorial/06/redirect", redirect_to='/tutorial/03')
def tuto6():
    print('06')

@app.route("/tutorial/07/<page>", methods=['GET', 'POST'])
@app.route("/tutorial/07/", defaults={'page': 'index2'})
def tuto7(page):
    return "you ar now on :" + page

@app.route("/tutorial/08")
def tuto8():
    # q = request.args.get('abc ')
    q = request.values.get('abc ')
    return str(q)

@app.route("/tutorial/09", methods=["GET"])
def tuto9():
    res = Response("<form method=\"POST\" action=\"/tutorial/09\"><input type=\"text\" name=\"k\"><input type=\"submit\"></form>", 200, {'custom-header' : 'the header value'})
    return make_response(res)
@app.route("/tutorial/09", methods=["POST"])
def tuto9_p():
    # return request.form.get('k')
    return request.values.get('k')

@app.route("/tutorial/10", methods=["GET"])
def tuto10():
    return str(request.args.getlist('q'))

from datetime import datetime, date

def ymd2(fmt):
    def trans(date_str):
        return datetime.strptime(date_str, fmt)
    return trans

@app.route("/tutorial/11")
def tuto11():
    # return str(request.values.get('date', date.today(), type=ymd('%y-%m-%d')))
    return str(datetime.now())

@app.route("/tutorial/env")
def tuto_env():
    res = '''{
        "REQUEST_METHOD" : "%(REQUEST_METHOD) s",
        "SCRIPT_NAME": "%(SCRIPT_NAME) s",
        "PATH_INFO" : "%(PATH_INFO) s",
        "QUERY_STRING": "%(QUERY_STRING) s",
        "SERVER_NAME": "%(SERVER_NAME) s",
        "SERVER_PORT": "%(SERVER_PORT) s",
        "SERVER_PROTOCOL": "%(SERVER_PROTOCOL) s",
        "wsgi.version": "%(wsgi.version) s",
        "wsgi.url_scheme": "%(wsgi.url_scheme) s",
        "wsgi.input": "%(wsgi.input) s",
        "wsgi.errors": "%(wsgi.errors) s",
        "wsgi.multithread": "%(wsgi.multithread) s",
        "wsgi.multiprocess": "%(wsgi.multiprocess) s",
        "wsgi.run_once": "%(wsgi.run_once) s"
        }''' % request.environ
    return make_response(Response(res, 200, {'Content-type' : 'application/json; charset=UTF-8'}))

@app.route('/tutorial/cookie')
def tuto_set_cookie():
    res = Response('cookie')
    res.set_cookie('token', request.args.get('token'))
    return make_response(res)

@app.route('/tutorial/cookie/get')
def tuto_get_cookie():
    res = Response('cookie: %s' % request.cookies.get('token'))
    res.delete_cookie('token')
    return make_response(res)

@app.route('/tutorial/session')
def tuto_sess():
    session['Token'] = 'qwerty'
    return 'session'

@app.route('/tutorial/session/get')
def tuto_sess_get():
    t = session.get('Token')
    if t:
        # del session['Token']
        return t
    return "no session"

@app.route('/jinja/test')
def jinja_test():
    data = {
        'title': 'foo',
        'markupped': Markup('<strong>bar</strong>'),
        'songs': [
            ('mandrake','gukkasten'),('faint','linkinpark'),('try','p!nk'),('cindllelra','sia'),('forbbiden love','Kim Gyong-ho')
        ],
        'skills': [
            ('php', [
                ('laravel', 5), ('template_', 4.5), ('phalcon', 2), ('codeigniter', 3)
            ]),
            ('JAVA', [
                ('springboot', 3), ('jsp', 1), ('egov',1)
            ]),
            ('js', [
                ('nodejs', 3), ('vue', 3.5)
            ]),
            ('css', [
                ('bootstrap', 2), ('bulma', 3), ('tailwind', 4)
            ])
        ],
    }
    # kim = ('kim', 100, [ ('lee', 40, []), ('ko', 60, []) ])
    # hong = ('hong', 40, [ ('J', 60, []),('kong', 35, [kim]),('hwang', 28, []) ])
    # kown = ('kwon', 88, [ ('cho', 10, [hong, kim]) ])

    class Student:
        def __init__(self, name, score, friends = []):
            self.name = name
            self.score = score
            self.friends = friends

    kim = Student('kim', 100, [Student('lee', 40), Student('ko', 60)])
    hong = Student('hong', 40, [Student('J', 60), Student('kong', 35, [kim]), Student('hwang', 28)])
    kown = Student('kown', 88, [Student('cho', 10, [hong, kim])])

    students = [kim, hong, kown]
    return render_template('main.html.j2', data=data, students=students)

@app.route('/jinja/layout')
def jinja_layout():
    return render_template('layout.html.j2', ttt='this is ttt', today=datetime.now())
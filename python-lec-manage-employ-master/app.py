from flask import Flask, request, render_template, redirect, url_for, flash
from apps.models.Employee import Employee
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
true = True
false = False

app.secret_key = "secret key"
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://Tester:Zktm500CC!@127.0.0.1/TestForLaravel'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


if __name__ == '__main__':
    app.run(debug=True)

@app.route('/')
def index():
    all_data = Employee.query.all()
    return render_template('index.html.j2', data=all_data)


@app.route('/insert', methods=['POST'])
def insert():
    name = request.form['name']
    email = request.form['email']
    phone = request.form['phone']

    employee = Employee(name, email, phone)

    db.session.add(employee)
    db.session.commit()

    flash("Inserted successfully")

    return redirect( url_for('index') )


@app.route('/update/<id>', methods=['PATCH', 'POST'])
def update(id):
    emp = Employee.query.get(request.form.get('id'))
    emp.name = request.form['name']
    emp.email = request.form['email']
    emp.phone = request.form['phone']

    db.session.commit()

    flash("Update successfully")
    return redirect( url_for('index') )


@app.route('/delete/<id>', methods=['DELETE', 'POST'])
def delete(id):
    Employee.query.filter(Employee.id == request.form.get('id')).delete()
    db.session.commit()

    flash("Delete successfully")
    return redirect( url_for('index') )

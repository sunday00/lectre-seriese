import wx

class HelloFrame (wx.Frame):
    def __init__(self, *argv, **kw):
        # print("argv => ", argv)
        # print("kw => ", kw)
        super(HelloFrame, self).__init__(*argv, **kw)

        self.pnl = wx.Panel(self)

        self.makeControl()
        self.makeMenuBar()
        # self.CreateStatusBar()
        # self.SetStatusText("status text")

    def makeControl(self):
        self.txt = wx.TextCtrl(self.pnl, -1, size=(140, -1), style=wx.TE_RICH)
        self.txt.SetValue('place holder')
        self.txt.SetForegroundColour(wx.RED)

        self.btn = wx.Button(self.pnl, wx.ID_ANY, 'DO!')
        self.Bind(wx.EVT_BUTTON, self.actButton, self.btn)

        self.btnFile = wx.Button(self.pnl, wx.ID_ANY, 'open File')
        self.Bind(wx.EVT_BUTTON, self.openFile, self.btnFile)

        self.st = wx.StaticText(self.pnl, label='hello static text')
        font = self.st.GetFont()
        font.PointSize += 10
        font = font.Bold()
        self.st.SetFont(font)

        sizer = wx.BoxSizer(wx.VERTICAL)
        sizer.Add(self.st)
        sizer.Add(self.txt)

        sizerButtons = wx.WrapSizer(wx.HORIZONTAL)
        sizerButtons.Add(self.btn)
        sizerButtons.Add(self.btnFile)

        sizer.Add(sizerButtons)
        self.pnl.SetSizer(sizer)

    def makeMenuBar(self):
        fileMenu = wx.Menu()
        helloItem = fileMenu.Append(-1, "&Hello... \tCtrl-H", "Help string shown in status bar")
        fileMenu.AppendSeparator()
        exitItem = fileMenu.Append(wx.ID_EXIT)

        helpMenu = wx.Menu()
        aboutItem = helpMenu.Append(wx.ID_ABOUT)

        menuBar = wx.MenuBar()
        menuBar.Append(fileMenu, '&File')
        menuBar.Append(helpMenu, '&Help')

        self.SetMenuBar(menuBar)

        self.Bind(wx.EVT_MENU, self.OnHello, helloItem)
        self.Bind(wx.EVT_MENU, self.OnExit, exitItem)
        self.Bind(wx.EVT_MENU, self.OnAbout, aboutItem)

    def actButton(self, *argv):
        print(argv)
        return ''
    
    def openFile():
        return ''

    def OnHello(self, evt):
        wx.MessageBox('hello, this is box')

    def OnExit(self, evt):
        # exit()
        self.Destroy()

    def OnAbout(self, evt):
        wx.MessageBox('ABOUT!!!', 'THIS IS ABOUT BOX!', wx.OK | wx.ICON_INFORMATION)

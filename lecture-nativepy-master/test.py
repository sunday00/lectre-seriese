import wx
from classes.HelloFrame import HelloFrame

app = wx.App()
# frm = wx.Frame(None, title="hello py")
frm = HelloFrame(None, title="hello py", size=(500, 200))
frm.Show()
app.MainLoop()
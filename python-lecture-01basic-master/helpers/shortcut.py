import os
import sys

def clear():
    os.system('clear' if os.name == 'posix' else 'cls')
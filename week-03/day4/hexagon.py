from tkinter import *
import time

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def first_square(x, y, size):
    canvas.create_polygon(x, y, size*1/4 + x, y - size*1/2, size*3/4 + x, y - size*1/2, size + x, y, size*3/4 + x, size*1/2 + y, size*1/4 + x, size*1/2 + y, fill = "", outline = 'black')

#print(first_square(80, 300, 500))

def hexagon_in_hexagon(x, y, size):
    first_square(x, y, size)
    time.sleep(0.0001)
    canvas.update()

    if size > 1:
        hexagon_in_hexagon(x + size*1/8, y - size*1/4, size*1/2)
        hexagon_in_hexagon(x + size*1/2, y, size*1/2)
        hexagon_in_hexagon(x + size*1/8, y + size*1/4, size*1/2)

hexagon_in_hexagon(80, 300, 500)

root.mainloop()

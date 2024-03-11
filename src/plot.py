# https://www.w3schools.com/python/trypython.asp?filename=demo_matplotlib_bars1
#Three lines to make our compiler able to draw:
import sys
import matplotlib
# matplotlib.use('Agg')

import matplotlib.pyplot as plt
import numpy as np

def hour_to_minute(h):
    return h * 60
    
def total_time(h, m):
    return hour_to_minute(h) + m

x = np.array(["A", "B", "C", "D", "E"])
y = np.array([8, 63, 30, 64, 68])

plt.bar(x,y)
plt.show()

#Two  lines to make our compiler able to draw:
plt.savefig(sys.stdout.buffer)
sys.stdout.flush()

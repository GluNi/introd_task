import matplotlib.pyplot as plt
import base64
from io import BytesIO
import numpy as np

def get_graph():
    buffer = BytesIO()
    plt.savefig(buffer, format='png')
    buffer.seek(0)
    image_png = buffer.getvalue()
    #print(image_png)
    graph = base64.b64encode(image_png)
    #print(graph)
    graph = graph.decode('utf-8')
    #print(graph)
    buffer.close()
    return graph

def get_plot(x):
    plt.switch_backend('AGG')     
    plt.plot(x)
    fig, ax = plt.subplots(figsize =(8, 4), tight_layout = True)    
    q25, q75 = np.percentile(x, [25, 75])
    bin_width = 2 * (q75 - q25) * len(x) ** (-1/3)
    bins = round((max(x) - min(x)) / bin_width)     
    chart = plt.hist(x, bins = bins)    
    plt.title('Distribution of User Lives')
    plt.xlabel('Life Expectancy, [days]')
    ax.xaxis.set_tick_params(pad = 5)
    plt.yscale("log")
    plt.xscale("log")
    plt.grid(b = True, color ='grey', linestyle ='-.', linewidth = 0.5, alpha = 0.6)
    graph = get_graph()
    return graph
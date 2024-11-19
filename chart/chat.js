class ChartCreator {
  constructor(dataUrl) {
    this.dataUrl = dataUrl;
    this.pieCtx = document.getElementById("pieChart");
  }

  async fetchData() {
    try {
      const response = await fetch(this.dataUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return await response.json();
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  }
  createPieChart(data) {
    new Chart(this.pieCtx, {
      type: "pie",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            data: data.values,
            backgroundColor: [
              "red",
              "blue",
              "yellow",
              "green",
              "purple",
              "orange",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      },
    });
  }

  async init() {
    const data = await this.fetchData();
    if (data) {
      this.createPieChart(data);
    }
  }
}
document.getElementById("pieChart");
const chartCreator = new ChartCreator("chart.json");

chartCreator.init();
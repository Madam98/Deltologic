export const getWaterVolume = async (surfaceArray: number[]): Promise<number> => {
  try {
    const response = await fetch("http://localhost:5000/calculate-volume", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ surfaceArray }),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.volume;
  } catch (error) {
    //console.error(error);
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      console.error('Failed to fetch data. Trying again in 5 seconds...');
      await new Promise(resolve => setTimeout(resolve, 5000));
      return getWaterVolume(surfaceArray);
    } else {
      throw new Error("Wystąpił błąd podczas wykonywania żądania.");
    }
  }
};

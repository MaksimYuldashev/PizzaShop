export const sortData = (sortedData, setSortedData) => {
    const sorted = [...sortedData].sort((a, b) => a.price - b.price)
    setSortedData(sorted)
}
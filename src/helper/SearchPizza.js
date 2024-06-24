import LoadingPage from "../pages/LoadingPage";

export const handleSearch = (e, setFindEl, isLoading, data) => {
    if (isLoading) return <LoadingPage />
    const searchTerm = e.target.value
    setFindEl(data.find((pizza) => pizza.title.toLowerCase().includes(searchTerm.toLowerCase())))
}
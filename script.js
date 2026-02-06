const api_base = "https://openapi.programming-hero.com/api/phero-tube"


const loadCategories = async () => {
    try {
        const response = await fetch(`${api_base}/categories`)
        const data = await response.json()
        console.log(data)
    }
    catch (err) {
        console.error('error loading categories', err)
    }


}


const initialApp = async () => {
    await loadCategories()
}

initialApp()




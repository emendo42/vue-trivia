import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://opentdb.com',
})

export default function useAPI() {
  const getCategories = async () => {
    const responce = await instance.get('api_category.php')
    return responce.data.trivia_categories
  }

  return { instance, getCategories }
}

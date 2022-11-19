export const getImageUrl = async image => {
  const formData = new FormData()
  formData.append('image', image)

  const url = `https://api.imgbb.com/1/upload?key=bb406e6aefacc44e37d7220991feb6f5`

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  })
  const data = await response.json()
  return data.data.display_url
}

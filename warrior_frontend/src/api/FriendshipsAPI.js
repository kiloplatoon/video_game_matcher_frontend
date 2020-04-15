const username = localStorage.getItem("current_user")
const user_id = parseInt(localStorage.getItem("current_user_id"))

const delete_buddy = async () => {
  let res = await fetch(url, {
    method : 'POST',
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     },
     params : {
      'user_id' : user_id
     }
  })
  let data = await res.json()
  localStorage.setItem('buddy_list', JSON.stringify(data))
  return data
}

export default {
  delete_buddy,
  add_buddy
}
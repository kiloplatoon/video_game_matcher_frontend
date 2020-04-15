const username = localStorage.getItem("current_user")
const user_id = parseInt(localStorage.getItem("current_user_id"))

// const delete_buddy = async (user_id, buddy_id) => {
//   console.log("WTF")
//   const delete_url = 'http://127.0.0.1:8000/friendships/' + user_id + '/delete_friend/' + buddy_id
//   let res = await fetch(delete_url, {
//     method : 'POST',
//     headers : { 
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//      },
//      params : {
//       'user_id' : user_id
//      }
//   })
//   let data = await res.json()
//   localStorage.setItem('buddy_list', JSON.stringify(data))
//   return data
// }

// const add_buddy = async () => {
//   let res = await fetch(url, {
//     method : 'POST',
//     headers : { 
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//      },
//   })
//   let data = await res.json()
//   localStorage.setItem('buddy_list', JSON.stringify(data))
//   return data
// }

export default {
  // delete_buddy,
  // add_buddy
}

import wepy from 'wepy'

const phpHost = "http://162.219.127.199/web/basic/web";

export const getList = () => wepy.request({
  url: `${phpHost}/index.php?r=book/list`,
  method: 'GET'
})

export const createItem = (item) => wepy.request({
  url: `${phpHost}/index.php?r=book/create`,
  data: item,
  method: 'POST',
  header: {
    'content-type': 'application/x-www-form-urlencoded'
  }
});

export const updateItem = (id, item) => wepy.request({
  url: `${phpHost}/index.php?r=book/update&id=${id}`,
  data: item,
  method: 'POST',
  header: {
    'content-type': 'application/x-www-form-urlencoded'
  }
});

export const deleteItem = (id) => wepy.request({
  url: `${phpHost}/index.php?r=book/delete-book&id=${id}`,
  method: 'GET'
});

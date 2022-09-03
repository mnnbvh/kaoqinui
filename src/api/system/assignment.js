import request from '@/utils/request'

// 查询配电箱列表
export function listAssignment(query) {
  return request({
    url: '/system/assignment/list',
    method: 'get',
    params: query
  })
}

// 查询配电箱详细
export function getAssignment(id) {
  return request({
    url: '/system/assignment/' + id,
    method: 'get'
  })
}

// 新增配电箱
export function addAssignment(data) {
  return request({
    url: '/system/assignment',
    method: 'post',
    data: data
  })
}

// 修改配电箱
export function updateAssignment(data) {
  return request({
    url: '/system/assignment',
    method: 'put',
    data: data
  })
}

// 删除配电箱
export function delAssignment(id) {
  return request({
    url: '/system/assignment/' + id,
    method: 'delete'
  })
}

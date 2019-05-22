import request from '@/utils/request'
// import qs from 'qs'

const SERVICE_BASE = '/base'// base服务
/**
 * 获取任务列表
 * @param {List} query
 */
export function fetchTaskList(query) {
  return request({
    url: SERVICE_BASE + '/task',
    method: 'get',
    params: query
  })
}

/**
 * 根据id查询
 * @param {List} id
 */
export function getTaskById(id) {
  return request({
    url: SERVICE_BASE + '/task/' + id,
    method: 'get'
  })
}

/**
 *  创建任务
 * @param {*} data
 */
export function createTask(data) {
  return request({
    url: SERVICE_BASE + '/task',
    method: 'POST',
    // data: qs.stringify(data)
    data: data
  })
}

/**
 *  删除任务
 * @param {String} id:要删除的任务数据id
 */
export function deleteTask(ids) {
  return request({
    url: SERVICE_BASE + '/task',
    method: 'DELETE',
    // data: qs.stringify(data)
    data: ids
  })
}

/**
 * 更新任务数据
 * @param {*} data
 */
export function updateTask(data) {
  return request({
    url: SERVICE_BASE + '/task',
    method: 'PUT',
    // data: qs.stringify(data)
    data: data
  })
}


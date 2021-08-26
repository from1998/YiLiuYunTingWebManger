import request from '@/utils/request'

// 查询车场信息
export function getDepotById(id) {
  return request({
    url: '/ylyt/park/getParkByMid/' + id,
    method: 'get'
  })
}

// 添加车场信息
export function addDepotInfo(data) {
  return request({
    url: '/ylyt/park/addPark',
    method: 'post',
    params: data
  })
}

// 修改车场信息
export function updateDepotInfo(data) {
  return request({
    url: '/ylyt/park/updatePark',
    method: 'put',
    params: data
  })
}

// 查询车场配置
export function getParkOperationByMid(id) {
  return request({
    url: '/ylyt/park/getParkOperationByMid/' + id,
    method: 'get'
  })
}

// 添加车场配置
export function addDepotSet(data) {
  return request({
    url: '/ylyt/park/addParkOperation',
    method: 'post',
    params: data
  })
}

// 修改车场配置
export function updateDepotSet(data) {
  return request({
    url: '/ylyt/park/updateParkOperation',
    method: 'put',
    params: data
  })
}

// 添加收费规则
export function addParkfee(data) {
  return request({
    url: '/ylyt/parkFee/addParkfee',
    method: 'post',
    params: data
  })
}

// 修改收费规则
export function updateParkfee(data) {
  return request({
    url: '/ylyt/parkFee/updateParkfee',
    method: 'put',
    params: data
  })
}
// -------------------------------------岗亭

// 查询岗亭设置列表
export function getWorkStationByMid(id) {
  return request({
    url: '/ylyt/workStation/getWorkStationByMid/' + id,
    method: 'get'
  })
}
// 根据ID查询岗亭信息
export function getWorkStationById(id) {
  return request({
    url: '/ylyt/workStation/getWorkStationById/' + id,
    method: 'get'
  })
}

// 添加岗亭设置
export function addWorkStation(data) {
  return request({
    url: '/ylyt/workStation/addWorkStation',
    method: 'post',
    params: data
  })
}

// 修改岗亭设置
export function updateWorkStation(data) {
  return request({
    url: '/ylyt/workStation/updateWorkStation',
    method: 'put',
    params: data
  })
}

// 删除岗亭设置
export function deleteWorkStationById(id) {
  return request({
    url: '/ylyt/workStation/deleteWorkStationById/' + id,
    method: 'delete'
  })
}

// 根据岗亭名称查询岗亭设置
export function getWorkStationLikeName(name) {
  return request({
    url: '/ylyt/workStation/getWorkStationLikeName/' + name,
    method: 'get'
  })
}
// -------------------------------------车道

// 查询车道列表
export function getLaneByMid(id) {
  return request({
    url: '/ylyt/lane/getLaneByMid/' + id,
    method: 'get'
  })
}
// 根据ID查询车道信息
export function getLaneById(id) {
  return request({
    url: '/ylyt/lane/getLaneById/' + id,
    method: 'get'
  })
}

// 添加车道设置
export function addLane(data) {
  return request({
    url: '/ylyt/lane/addLane',
    method: 'post',
    params: data
  })
}

// 修改车道设置
export function updateLane(data) {
  return request({
    url: '/ylyt/lane/updateLane',
    method: 'put',
    params: data
  })
}

// 删除单个车道
export function deleteLaneById(id) {
  return request({
    url: '/ylyt/lane/deleteLaneById/' + id,
    method: 'delete'
  })
}
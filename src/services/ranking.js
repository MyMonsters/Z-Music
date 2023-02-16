import request from './request';
export function getAllToplist() {
  return request({
    url: '/toplist',
  });
}


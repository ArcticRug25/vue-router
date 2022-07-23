import { http } from '@/plugins/axios'

export interface Upload {
  url: string
}

export function uploadImage(data: FormData) {
  return http.request<Upload>({
    url: 'upload/image',
    method: 'post',
    data,
  })
}

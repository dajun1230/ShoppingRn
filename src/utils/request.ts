import React from 'react';
import { baseUrl } from './constants';

interface RequestOptions extends RequestInit {
  timeout?: number;
}

const falseResult = { ok: false, data: null };

const request = async (url: string, options: RequestOptions): Promise<{ ok: boolean; data: any; msg?: string; }> => {
  const additionalHeader = (options.method === 'POST' || options.method === 'PUT' ) &&  {
    Accept: "application/json",
    "Content-type": options.body instanceof FormData ? 'multipart/form-data' : 'application/json'
  };
  const resp = await Promise.race<Response | undefined>([
    fetch(baseUrl + url, {
      ...options,
      headers: {
        ...(additionalHeader || {}),
        ...(options.headers || {}),
        Authorization: `Bearer `
      }
    }).catch(error => undefined),
    new Promise((resolve) => setTimeout(() => {
      resolve(undefined);
    }, options.timeout || 10000))
  ])
  if (resp) {
    if (resp.status === 401) {
      // TODO: 退出
      return falseResult;
    }
    const text = await resp.text();
    let json;
    try {
      json = JSON.parse(text);
    } catch (e) {
      console.warn('RESP failed to parse: ', text);
      throw e;
    }
    return json;
  } else {
    return falseResult;
  }
}

export function get(url: string, options: RequestOptions) {
  return request(url, {
    ...options,
    method: "GET"
  })
}

export function post(url: string, data: object, options: RequestOptions) {
  return request(url, {
    ...options,
    body: data instanceof FormData ? data : JSON.stringify(data),
    method: "POST"
  })
}

export function put(url: string, data: object, options: RequestOptions) {
  return request(url, {
    ...options,
    body: data instanceof FormData ? data : JSON.stringify(data),
    method: "PUT"
  })
}

import axios from "axios";

const API_LOGIN_URL = 'http://localhost:8080/api/login';
const API_CREATE_ACCOUNT_URL = 'http://localhost:8080/api/admin';
const API_GETALL_ACCOUNT_URL = 'http://localhost:8080/api/admin';
const API_CREATE_POST_URL = 'http://localhost:8080/api/hr';
const API_GETALL_POST_URL = 'https://665f12411e9017dc16f2b4b1.mockapi.io/post';
const API_GET_POST_DETAIL = 'https://665f12411e9017dc16f2b4b1.mockapi.io/post';
const API_GET_APPLICATION = 'https://665f12411e9017dc16f2b4b1.mockapi.io/application';
const API_GET_SCHEDULE = 'https://66641940932baf9032a9f5e4.mockapi.io/schedule';
const API_GET_INTERVIEWEES = 'https://66641940932baf9032a9f5e4.mockapi.io/interviewees';

export const login = async (username, password) => {
  const response = await fetch(`${API_LOGIN_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
};

export const createAccount = async (accountData) => {
  const response = await fetch(`${API_CREATE_ACCOUNT_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(accountData),
  });

  if (!response.ok) {
    throw new Error('Failed to create account');
  }

  return response.json();
};

export const fetchAccounts = async () => {
  const response = await fetch(`${API_GETALL_ACCOUNT_URL}`);

  if (!response.ok) {
    throw new Error('Failed to fetch accounts');
  }

  return response.json();
};

export const createPost = async (postData) => {
  const response = await fetch(`${API_CREATE_POST_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    throw new Error('Failed to create post');
  }

  return response.json();
};

export const fetchPosts = async () => {
  const response = await fetch(`${API_GETALL_POST_URL}`);

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
};

export const fetchPostDetail = async (postId) => {

  const response = await fetch(`${API_GET_POST_DETAIL}/${postId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) { 
    throw new Error('Failed to fetch post details');
  }

  return response.json();
};

export const fetchApplication = async () => {
  const response = await fetch(`${API_GET_APPLICATION}`);

  if (!response.ok) {
    throw new Error('Failed to fetch applications');
  }

  return response.json();
};

export const fetchApplicationDetail = async (id) => {
  const response = await fetch(`${API_GET_APPLICATION}/${id}`)

  if(!response.ok) {
    throw new Error('Failed to fetch application detail');
  }

  return response.json();
}

export const createApplication = async (applicationData) => {
  const response = await fetch(`${API_CREATE_ACCOUNT_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(applicationData),
  });

  if (!response.ok) {
    throw new Error('Failed to create application');
  }

  return response.json();
};

export const updateStatusApplication = async (status, id) => {
  const rs = await axios.put(`${API_GET_APPLICATION}/${id}`, {
    status
  });
  return rs;
}

export const fetchSchedule = async () => {
  const response = await fetch(`${API_GET_SCHEDULE}`);

  if (!response.ok) {
    throw new Error('Failed to fetch schedule');
  }

  return response.json();
};

export const fetchInterviewees = async () => {
  const response = await fetch(`${API_GET_INTERVIEWEES}`);

  if (!response.ok) {
    throw new Error('Failed to fetch interviewees');
  }

  return response.json();
}
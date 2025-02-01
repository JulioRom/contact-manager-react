import axios from "axios";

const API_URL = "https://playground.4geeks.com/contact";

export const getAgendas = async () => {
  const response = await axios.get(`${API_URL}/agendas`);
  return response.data.agendas;
};

export const createAgenda = async (slug) => {
  const response = await axios.post(`${API_URL}/agendas/${slug}`);
  return response.data;
};

export const deleteAgenda = async (slug) => {
  await axios.delete(`${API_URL}/agendas/${slug}`);
};

export const getContacts = async (slug) => {
  const response = await axios.get(`${API_URL}/agendas/${slug}/contacts`);
  return response.data.contacts;
};

export const createContact = async (slug, contactData) => {
  const response = await axios.post(`${API_URL}/agendas/${slug}/contacts`, contactData);
  return response.data;
};

export const updateContact = async (slug, contactId, contactData) => {
  const response = await axios.put(`${API_URL}/agendas/${slug}/contacts/${contactId}`, contactData);
  return response.data;
};

export const deleteContact = async (slug, contactId) => {
  await axios.delete(`${API_URL}/agendas/${slug}/contacts/${contactId}`);
};

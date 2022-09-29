import instance from ".";

const api = {
  async checkAuthentication() {
    return await instance({
      url: "/authenticate",
      method: "Get",
    });
  },

  async postSingUp(data) {
    return await instance({
      url: "/register",
      method: "POST",
      data: data,
    });
  },

  async postLogin(data) {
    return await instance({
      url: "/login",
      method: "POST",
      data: data,
    });
  },

  async postLogout() {
    return await instance({
      url: "/logout",
      method: "POST",
    });
  },

  async getAllData() {
    return await instance({
      url: "/",
      method: "Get",
    });
  },

  async addItem(data, file) {
    const formData = new FormData();
    formData.append("file", file);
    const headers = {
      "content-type": "multipart/form-data",
    };

    return await instance({
      url: "/uploads",
      method: "Post",
      data: formData,
      headers,
    });
  },
  async editItem(data) {
    return await instance({
      url: "/item",
      method: "Patch",
      data: data,
    });
  },

  async deleteItem(id) {
    console.log("111111", id);
    return await instance({
      url: "/item",
      method: "Delete",
      data: { id },
    });
  },

  async getItemDetails(id) {
    return await instance({
      url: "/item/",
      method: "Get",
      params: { id },
    });
  },
};

export default api;

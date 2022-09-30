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

  async addItem(item, file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("prices",  JSON.stringify(item.prices))
    formData.append("itemname", item.itemname)
    formData.append("itemtype", item.itemtype)
    formData.append("customertype", item.customertype)

    const headers = {
      "content-type": "multipart/form-data",
    };

    return await instance({
      url: "/item",
      method: "Post",
      data: formData,
      headers,
    });
  },
  async editItem(item, file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("id", item.id);
    formData.append("prices", JSON.stringify(item.prices))
    formData.append("itemname", item.itemname)
    formData.append("itemtype", item.itemtype)
    formData.append("customertype", item.customertype)
    const headers = {
      "content-type": "multipart/form-data",
    };
    console.log(JSON.stringify(item.prices))
    return await instance({
      url: "/item",
      method: "Patch",
      data: formData,
      headers,
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

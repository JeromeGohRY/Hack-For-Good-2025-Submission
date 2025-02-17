import { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, InputNumber, message } from "antd";
import productHandler from "../api/products"; 
import userHandler from "../api/users"

const Products=()=> {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form] = Form.useForm();
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    fetchProducts();
    fetchWishlistItems();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await productHandler.getAll();
      setProducts(data);
    } catch (error) {
      message.error("Failed to fetch products.");
      console.log(error.message);
    }
  };

  const fetchWishlistItems = async () => {
    try {
      const users = await userHandler.getAllUsers();
      const wishlistData = [];

      users.forEach((user) => {
        const { wishlist } = user;
        if (wishlist) {
          Object.entries(wishlist).forEach(([key, value]) => {
            wishlistData.push({
              username: user.username,
              item: key,
              price: value,
            });
          });
        }
      });

      setWishlistItems(wishlistData);
    } catch (error) {
      message.error("Failed to fetch wishlist items.");
      console.log(error.message);
    }
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    form.setFieldsValue(product);
    setIsModalOpen(true);
  };

  const handleDeleteProduct = async (id) => {
    try {
      await productHandler.remove(id);
      message.success("Product deleted successfully.");
      fetchProducts();
    } catch (error) {
      message.error("Failed to delete product.");
      console.log(error.message)
    }
  };

  const handleExportCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Name,Category,Stock,Price"]
        .concat(products.map((p) => `${p.name},${p.category},${p.stock},${p.price}`))
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "products.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (values) => {
    try {
      if (editingProduct) {
        await productHandler.update({ ...editingProduct, ...values });
        message.success("Product updated successfully.");
      } else {
        await productHandler.create(values);
        message.success("Product added successfully.");
      }
      setIsModalOpen(false);
      fetchProducts();
    } catch (error) {
      message.error("Failed to save product.");
      console.log(error.message)
    }
  };

  const columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Stock", dataIndex: "stock", key: "stock" },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <>
          <Button type="link" onClick={() => handleEditProduct(record)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => handleDeleteProduct(record.id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];
  const wishlistColumns = [
    { title: "Username", dataIndex: "username", key: "username" },
    { title: "Item", dataIndex: "item", key: "item" },
    { title: "Reccomended Price", dataIndex: "price", key: "price" },
  ];
  return (
    <div>
      <Button type="primary" onClick={handleAddProduct} style={{ marginBottom: 16 }}>
        Add Product
      </Button>
      <Button type="default" onClick={handleExportCSV} style={{ marginLeft: 8 }}>
        Export CSV
      </Button>
      <Table columns={columns} dataSource={products} rowKey="id" />
      <h2>Wishlist Items</h2>
      <Table
        columns={wishlistColumns}
        dataSource={wishlistItems}
        rowKey={(record, index) => `${record.username}-${index}`}
      />
      <Modal
        title={editingProduct ? "Edit Product" : "Add Product"}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item name="name" label="Product Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="category" label="Product Category" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="stock" label="Stock" rules={[{ required: true, type: "number", min: 0 }]}>
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name="price" label="Price" rules={[{ required: true, type: "number", min: 0 }]}>
            <InputNumber style={{ width: "100%" }} />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form>
      </Modal>
    </div>
  );
}

export default Products;

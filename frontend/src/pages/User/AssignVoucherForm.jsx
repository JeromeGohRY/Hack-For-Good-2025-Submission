import React, { useState } from 'react';

const AssignVoucherForm = () => {
  const [formData, setFormData] = useState({
    assignee: '',
    taskTitle: '',
    taskDescription: '',
    dueDate: '',
    voucherType: '',
    voucherCount: '',
    isCompleted: 'No',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { assignee, taskTitle, taskDescription, dueDate, voucherType, voucherCount, isCompleted } = formData;

    if (!assignee || !taskTitle || !taskDescription || !dueDate || !voucherType || !voucherCount) {
      alert('Please fill in all fields.');
      return;
    }

    alert(`Vouchers Assigned Successfully!\n\nAssignee: ${assignee}\nTask / Award: ${taskTitle}\nDescription: ${taskDescription}\nDue: ${dueDate}\nVoucher: ${voucherCount} ${voucherType}(s)`);
    
    // Reset form after submission
    setFormData({
      assignee: '',
      taskTitle: '',
      taskDescription: '',
      dueDate: '',
      voucherType: '',
      voucherCount: '',
      isCompleted: 'No',
    });
  };

  return (
    <div className="container" style={styles.container}>
      <h2 style={styles.header}>Assign Vouchers</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label htmlFor="assignee" style={styles.label}>Assignee</label>
        <select
          id="assignee"
          name="assignee"
          value={formData.assignee}
          onChange={handleChange}
          style={styles.input}
          required
        >
          <option value="">Select User</option>
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
          <option value="Charlie">Charlie</option>
        </select>

        <label htmlFor="taskTitle" style={styles.label}>Task / Award Title</label>
        <input
          type="text"
          id="taskTitle"
          name="taskTitle"
          value={formData.taskTitle}
          onChange={handleChange}
          placeholder="Enter task / award title"
          style={styles.input}
          required
        />

        <label htmlFor="taskDescription" style={styles.label}>Task / Award Description</label>
        <textarea
          id="taskDescription"
          name="taskDescription"
          value={formData.taskDescription}
          onChange={handleChange}
          rows="3"
          placeholder="Enter task / award description"
          style={styles.textarea}
          required
        />

        <label htmlFor="dueDate" style={styles.label}>Date & Time to be Assigned</label>
        <input
          type="datetime-local"
          id="dueDate"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          style={styles.input}
          required
        />

        <label htmlFor="voucherType" style={styles.label}>Voucher Type</label>
        <select
          id="voucherType"
          name="voucherType"
          value={formData.voucherType}
          onChange={handleChange}
          style={styles.input}
          required
        >
          <option value="">Select Voucher Type</option>
          <option value="Tidbit">Tidbit Voucher</option>
          <option value="Stationary">Stationary Voucher</option>
        </select>

        <label htmlFor="voucherCount" style={styles.label}>Number of Vouchers</label>
        <input
          type="number"
          id="voucherCount"
          name="voucherCount"
          value={formData.voucherCount}
          onChange={handleChange}
          placeholder="Enter number"
          min="1"
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>Assign</button>
      </form>
    </div>
  );
};

// Beautified styles for the form
const styles = {
  container: {
    width: '100%',
    maxWidth: '500px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    padding: '30px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    textAlign: 'center',
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    fontSize: '16px',
    color: '#34495e',
    marginBottom: '6px',
    marginTop: '15px',
  },
  input: {
    padding: '12px',
    marginBottom: '12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    backgroundColor: '#f9f9f9',
  },
  textarea: {
    padding: '12px',
    marginBottom: '12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    backgroundColor: '#f9f9f9',
    resize: 'vertical',
  },
  note: {
    fontSize: '14px',
    color: '#7f8c8d',
    marginBottom: '20px',
  },
  button: {
    padding: '14px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#2980b9',
  },
};

export default AssignVoucherForm;

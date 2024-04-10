import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PathConstants from '../routes/PathConstants';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    deliveryDate: '',
    expirationDate: '',
    category: '',
    optionalInfo: '',
  });

  function handleFormChange(e) {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
    console.log(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    // ADD CLEARING FORM TO THE FETCH PORTION, ONLY AFTER SUCCESSFUL FETCH
    setFormData({
      name: '',
      deliveryDate: '',
      expirationDate: '',
      category: '',
      optionalInfo: '',
    });
    fetch('http://localhost:8080/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then(() => console.log('Fetched successfully!!!'));
  }

  function handleCategorySelection(e) {
    const categoryText = e.target.innerText;
    setFormData((prev) => ({
      ...prev,
      category: categoryText,
    }));

    console.log(e.target.innerText);
    console.log(e.target.parentElement.parentElement);
  }

  // MOCK DATA ===
  const mockData = [
    { id: 1, name: 'Vegetables' },
    { id: 2, name: 'Fruit' },
    { id: 3, name: 'Meat' },
    { id: 4, name: 'Chips' },
    { id: 5, name: 'Sweets' },
    { id: 6, name: 'Crisps' },
  ];

  return (
    <form className="addProductForm" onSubmit={handleSubmit}>
      <label>
        <p>Name</p>
        <input
          autoComplete="off"
          onChange={handleFormChange}
          value={formData.name}
          type="text"
          name="name"
          placeholder="Tomatoes"
          className="basicFormInput"
        />
      </label>

      <label>
        <p>Delivery Date</p>
        <input
          autoComplete="off"
          onChange={handleFormChange}
          value={formData.deliveryDate}
          type="text"
          name="deliveryDate"
          placeholder="yy-mm-dd"
          className="basicFormInput"
        />
      </label>

      <label>
        <p>Expiration Date</p>
        <input
          autoComplete="off"
          onChange={handleFormChange}
          value={formData.expirationDate}
          type="text"
          name="expirationDate"
          placeholder="yy-mm-dd"
          className="basicFormInput"
        />
      </label>

      <label>
        <p>Category</p>

        <div className="categoryContainer">
          <input
            autoComplete="off"
            id="categoryInput"
            onChange={handleFormChange}
            value={formData.category}
            type="text"
            name="category"
            placeholder="Vegetables"
          />

          <NavLink to={PathConstants.ADD_CATEGORY} className="addCategoryBtn link">
            +
          </NavLink>

          <div className="categoryDropdown">
            {mockData
              .filter((item) => {
                const searchedCategory = formData.category.toLowerCase();
                const name = item.name.toLowerCase();

                return name.startsWith(searchedCategory);
              })
              .map((item) => (
                <div
                  className="dropdownRow"
                  onMouseDown={handleCategorySelection}
                  key={item.id}
                >
                  {item.name}
                </div>
              ))}
          </div>
        </div>
      </label>

      <label>
        <p>Optional Info</p>

        <input
          autoComplete="off"
          onChange={handleFormChange}
          type="text"
          name="optionalInfo"
          className="basicFormInput"
          value={formData.optionalInfo}
        />
      </label>

      <button onClick={handleSubmit} type="submit" className="basicFormBtn">
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;

import React, { useContext, useEffect, useState } from 'react'
import Hero from '../components/Hero'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collections = () => {
  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState("default")

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = [...products]
    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilteredProducts(productsCopy)
  }

  const sortProduct = () => {
    let filterProductCopy = [...filteredProducts]
    switch (sortType) {

      case "low-high":
        setFilteredProducts(filterProductCopy.sort((a, b) => {
          return a.price - b.price
        }))
        break;

      case "high-low":
        setFilteredProducts(filterProductCopy.sort((a, b) => {
          return b.price - a.price
        }))
        break;

      default:
        applyFilter();
        break;
    }

  }




  useEffect(() => {
    setFilteredProducts(products)
  }, [])

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch, products])

  useEffect(() => {
    sortProduct()
  }, [sortType])
  return (

    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10  pt-10 border-t'>
      {/* Filter options */}
      <div className="min-w-60">
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center gap-2 cursor-pointer gap-2">FILTERS<img src={assets.dropdown_icon} alt="" className={`h-3 sm:hidden  ${showFilter ? 'rotate-90' : ''}`} /></p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium ">CATEGORIES</p>
          <div className="flex flex-col  gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2 ">
              <input type="checkbox" className="w-3" value={"Men"} onChange={toggleCategory} />Men
            </p>
            <p className="flex gap-2 ">
              <input type="checkbox" className="w-3" value={"Women"} onChange={toggleCategory} />Women
            </p>
            <p className="flex gap-2 ">
              <input type="checkbox" className="w-3" value={"Kids"} onChange={toggleCategory} />Kids
            </p>
          </div>
        </div>
        {/* subcategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium ">TYPES</p>
          <div className="flex flex-col  gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2 ">
              <input type="checkbox" className="w-3" value={"Topwear"} onChange={toggleSubCategory} />Topwear
            </p>
            <p className="flex gap-2 ">
              <input type="checkbox" className="w-3" value={"Bottomwear"} onChange={toggleSubCategory} />Bottomwear
            </p>
            <p className="flex gap-2 ">
              <input type="checkbox" className="w-3" value={"Winterwear"} onChange={toggleSubCategory} />Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side UI */}
      <div className="flex-1 ">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          {/* Products sorting */}
          <select onChange={(e) => setSortType(e.target.value)} className='border border-gray-300 text-sm px-2'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low </option>
          </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {
            filteredProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Collections
import Slider from 'react-slick'

const CategoryTabs = ({categories, onSelect, selected}) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <div className="bg-white p-2 shadow-md">
      <Slider {...settings}>
        {categories.map(category => (
          <button
            type="button"
            key={category.category_id}
            onClick={() => onSelect(category.category_id)}
            className={`px-4 py-2 text-sm font-medium ${
              selected === category.category_id
                ? 'text-red-500 border-b-2 border-red-500'
                : 'text-gray-700'
            }`}
          >
            {category.category_name}
          </button>
        ))}
      </Slider>
    </div>
  )
}

export default CategoryTabs

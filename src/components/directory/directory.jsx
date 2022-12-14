import Category from "../category/category";
import "./directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <Category key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;

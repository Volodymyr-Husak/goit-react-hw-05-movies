export const Movies = () => {
  return (
    <form className="{css.searchForm}" onSubmit="{handleSubmit}">
      <button className="{css.searchForm_button}" type="submit">
        <span className="{css.searchForm_button_label}">Search</span>
      </button>

      <input
        className="{css.searchForm_input}"
        onChange="{handleImageNameChange}"
        name="inputImage"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value="{imageName}"
      />
    </form>
  );
};

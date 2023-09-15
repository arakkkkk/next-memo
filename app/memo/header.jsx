import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const Header = ({ completions }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ok");
  };
  return (
    <>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Deploy faster
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to deploy your app
            </p>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <Autocomplete
                    disablePortal
                    className="w-full"
                    options={completions}
                    sx={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label="Search" />
                    )}
                    renderOption={(props, option) => {
                      return (
                        <li {...props} key={option.key}>
                          {option.label}
                        </li>
                      );
                    }}
                  />
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;

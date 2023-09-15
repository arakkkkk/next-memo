const Card = ({ memo }) => {
  return (
    <ul>
      <li className="bg-white rounded-xl py-5 my-3 px-5">
        <ul role="list" className="">
          <li className="flex justify-between gap-x-6 ">
            <div className="flex min-w-0 gap-x-4">
              <image
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_666201&psig=AOvVaw1txrNK4MDDuaH1t3U0FpC5&ust=1694869706840000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLDYp-jXrIEDFQAAAAAdAAAAABAE"
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-lg font-semibold leading-6 text-gray-900">
                  {memo.Title}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  <span className="bg-red-400 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                    GitLab
                  </span>
                  <span className="bg-sky-300 text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                    Slack
                  </span>
                </p>
              </div>
            </div>
            <ul className="md:flex md:justify-end">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mx-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 mx-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                  />
                </svg>
              </li>
            </ul>
          </li>
          <li className="rounded-md bg-gray-200 mt-3 px-4 py-1 text-md h-72">
            {memo.Title}
            <br />
            {memo.Title}
            <br />
            {memo.Title}
            <br />
            {memo.Title}
            <br />
            {memo.Title}
            <br />
            {memo.Title}
            <br />
            {memo.Title}
            <br />
            {memo.Title}
            <br />
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Card;

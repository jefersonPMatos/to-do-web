import React from "react";

import error from "../../assets/images/404.png";

export function Error() {
  return (
    <div>
      <img src={error} alt="404error" />
    </div>
  );
}

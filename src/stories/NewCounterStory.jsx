import React from "react";
import NewCounter from "../03/NewCounter.jsx";

import { storiesOf } from "@storybook/react";

storiesOf("NewCounter", module).add("기본설정", () => <NewCounter count={0} />);

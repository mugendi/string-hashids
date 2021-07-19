<!--
 Copyright 2021 Anthony Mugendi
 
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 
     http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

# Why?

You may have used [hashids](https://github.com/niieani/hashids.js) and I bet you love how the library encodes numeric values into awesome and short ids.

This library was born from my efforts to achieve the same very short ids using strings/text, not supported by hashids.

After a lot of tinkering, I figured that it was possible to use the **CRC-32** algorithm as an intermediary. This generates a short numeric hash from the string which is then converted to a hashid! In between we perform some *"padding"* for negative CRC-32 hashes as hashids only supports positive integers.

Simple and effective!

**Of course ids these are not intended to be cryptographically safe!**

## To Use
Install: ```yarn add string-hashids```

Then: 

```javascript

    let sHash = require("string-hashids");

    let str = 'After a lot of tinkering, I figured that it was possible to use the CRC-32 algorithm as an intermediary. This generates a short numeric hash from the string which is then converted to a hashid! In between we perform some "padding" for negative CRC-32 hashes as hashids only supports positive integers.';

    let hash = sHash.encode(str, "my salt");

    console.log(hash); //ERfnG8y6O

```

## API
**```encode(your_string, [your_salt])```**

Note:
- The string and salt values are automatically stringified using [toString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
- Salt is an optional value.


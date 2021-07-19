// Copyright 2021 Anthony Mugendi
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

let sHash = require(".");

let str = 'After a lot of tinkering, I figured that it was possible to use the CRC-32 algorithm as an intermediary. This generates a short numeric hash from the string which is then converted to a hashid! In between we perform some "padding" for negative CRC-32 hashes as hashids only supports positive integers.';
let hash = sHash.encode(str, "my salt");

console.log(hash);
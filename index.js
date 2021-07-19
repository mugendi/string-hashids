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

const CRC32 = require('crc-32'),
    Hashids = require('hashids/cjs'),
    hashids = new Hashids();

function encode(string, salt) {

    let crc32,
        args = [string.toString()];

    if (salt) {
        crc32 = CRC32.str(salt.toString());
        args.push(crc32)
    }

    crc32 = CRC32.str(...args);

    // handle negative crc32 hashes
    if (crc32 < 0) {
        args = [1, crc32 * -1]
    } else {
        args = [0, crc32]
    }


    return hashids.encode(args);

}



module.exports = { encode }
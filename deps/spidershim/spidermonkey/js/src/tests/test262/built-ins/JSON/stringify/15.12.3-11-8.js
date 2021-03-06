// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.12.3-11-8
description: JSON.stringify correctly works on top level String objects.
---*/

assert.sameValue(JSON.stringify(new String('wrappered')), '"wrappered"', 'JSON.stringify(new String(\'wrappered\'))');

reportCompare(0, 0);

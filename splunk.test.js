
// Copyright 2011 Splunk, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License"): you may
// not use this file except in compliance with the License. You may obtain
// a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations
// under the License.

(function() {
    var root = exports || this;

    root.SplunkTest = {
        Utils    : require('./tests/test_utils'),
        Async    : require('./tests/test_async'),
        Http     : require('./tests/test_http'),
        Binding  : require('./tests/test_binding'),
        Client   : require('./tests/test_client'),
        Searcher : require('./tests/test_searcher'),
        Examples : require('./tests/test_examples')
    };
})();
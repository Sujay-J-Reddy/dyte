/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 2867.0, "series": [{"data": [[0.0, 6.0], [0.1, 33.0], [0.2, 58.0], [0.3, 83.0], [0.4, 102.0], [0.5, 113.0], [0.6, 125.0], [0.7, 136.0], [0.8, 147.0], [0.9, 157.0], [1.0, 167.0], [1.1, 171.0], [1.2, 175.0], [1.3, 178.0], [1.4, 181.0], [1.5, 183.0], [1.6, 184.0], [1.7, 186.0], [1.8, 187.0], [1.9, 188.0], [2.0, 189.0], [2.1, 190.0], [2.2, 191.0], [2.3, 191.0], [2.4, 192.0], [2.5, 193.0], [2.6, 194.0], [2.7, 195.0], [2.8, 195.0], [2.9, 196.0], [3.0, 197.0], [3.1, 197.0], [3.2, 198.0], [3.3, 198.0], [3.4, 199.0], [3.5, 200.0], [3.6, 200.0], [3.7, 201.0], [3.8, 201.0], [3.9, 202.0], [4.0, 202.0], [4.1, 203.0], [4.2, 203.0], [4.3, 203.0], [4.4, 204.0], [4.5, 204.0], [4.6, 205.0], [4.7, 205.0], [4.8, 206.0], [4.9, 206.0], [5.0, 207.0], [5.1, 207.0], [5.2, 207.0], [5.3, 208.0], [5.4, 208.0], [5.5, 208.0], [5.6, 208.0], [5.7, 208.0], [5.8, 209.0], [5.9, 209.0], [6.0, 209.0], [6.1, 209.0], [6.2, 209.0], [6.3, 209.0], [6.4, 209.0], [6.5, 209.0], [6.6, 209.0], [6.7, 209.0], [6.8, 210.0], [6.9, 210.0], [7.0, 210.0], [7.1, 210.0], [7.2, 210.0], [7.3, 210.0], [7.4, 210.0], [7.5, 210.0], [7.6, 210.0], [7.7, 210.0], [7.8, 210.0], [7.9, 210.0], [8.0, 210.0], [8.1, 210.0], [8.2, 210.0], [8.3, 210.0], [8.4, 210.0], [8.5, 210.0], [8.6, 210.0], [8.7, 210.0], [8.8, 211.0], [8.9, 211.0], [9.0, 211.0], [9.1, 211.0], [9.2, 211.0], [9.3, 211.0], [9.4, 211.0], [9.5, 211.0], [9.6, 211.0], [9.7, 211.0], [9.8, 211.0], [9.9, 211.0], [10.0, 211.0], [10.1, 211.0], [10.2, 211.0], [10.3, 211.0], [10.4, 211.0], [10.5, 211.0], [10.6, 211.0], [10.7, 211.0], [10.8, 211.0], [10.9, 211.0], [11.0, 211.0], [11.1, 211.0], [11.2, 211.0], [11.3, 211.0], [11.4, 211.0], [11.5, 211.0], [11.6, 211.0], [11.7, 212.0], [11.8, 212.0], [11.9, 212.0], [12.0, 212.0], [12.1, 212.0], [12.2, 212.0], [12.3, 212.0], [12.4, 212.0], [12.5, 212.0], [12.6, 212.0], [12.7, 212.0], [12.8, 212.0], [12.9, 212.0], [13.0, 212.0], [13.1, 212.0], [13.2, 212.0], [13.3, 212.0], [13.4, 212.0], [13.5, 212.0], [13.6, 212.0], [13.7, 212.0], [13.8, 212.0], [13.9, 212.0], [14.0, 212.0], [14.1, 212.0], [14.2, 212.0], [14.3, 212.0], [14.4, 212.0], [14.5, 212.0], [14.6, 212.0], [14.7, 212.0], [14.8, 212.0], [14.9, 212.0], [15.0, 212.0], [15.1, 212.0], [15.2, 213.0], [15.3, 213.0], [15.4, 213.0], [15.5, 213.0], [15.6, 213.0], [15.7, 213.0], [15.8, 213.0], [15.9, 213.0], [16.0, 213.0], [16.1, 213.0], [16.2, 213.0], [16.3, 213.0], [16.4, 213.0], [16.5, 213.0], [16.6, 213.0], [16.7, 213.0], [16.8, 213.0], [16.9, 213.0], [17.0, 213.0], [17.1, 213.0], [17.2, 213.0], [17.3, 213.0], [17.4, 213.0], [17.5, 213.0], [17.6, 213.0], [17.7, 213.0], [17.8, 213.0], [17.9, 213.0], [18.0, 213.0], [18.1, 213.0], [18.2, 213.0], [18.3, 213.0], [18.4, 213.0], [18.5, 213.0], [18.6, 213.0], [18.7, 213.0], [18.8, 213.0], [18.9, 213.0], [19.0, 213.0], [19.1, 213.0], [19.2, 213.0], [19.3, 214.0], [19.4, 214.0], [19.5, 214.0], [19.6, 214.0], [19.7, 214.0], [19.8, 214.0], [19.9, 214.0], [20.0, 214.0], [20.1, 214.0], [20.2, 214.0], [20.3, 214.0], [20.4, 214.0], [20.5, 214.0], [20.6, 214.0], [20.7, 214.0], [20.8, 214.0], [20.9, 214.0], [21.0, 214.0], [21.1, 214.0], [21.2, 214.0], [21.3, 214.0], [21.4, 214.0], [21.5, 214.0], [21.6, 214.0], [21.7, 214.0], [21.8, 214.0], [21.9, 214.0], [22.0, 214.0], [22.1, 214.0], [22.2, 214.0], [22.3, 214.0], [22.4, 214.0], [22.5, 214.0], [22.6, 214.0], [22.7, 214.0], [22.8, 214.0], [22.9, 214.0], [23.0, 214.0], [23.1, 214.0], [23.2, 214.0], [23.3, 214.0], [23.4, 214.0], [23.5, 214.0], [23.6, 215.0], [23.7, 215.0], [23.8, 215.0], [23.9, 215.0], [24.0, 215.0], [24.1, 215.0], [24.2, 215.0], [24.3, 215.0], [24.4, 215.0], [24.5, 215.0], [24.6, 215.0], [24.7, 215.0], [24.8, 215.0], [24.9, 215.0], [25.0, 215.0], [25.1, 215.0], [25.2, 215.0], [25.3, 215.0], [25.4, 215.0], [25.5, 215.0], [25.6, 215.0], [25.7, 215.0], [25.8, 215.0], [25.9, 215.0], [26.0, 215.0], [26.1, 215.0], [26.2, 215.0], [26.3, 215.0], [26.4, 215.0], [26.5, 215.0], [26.6, 215.0], [26.7, 215.0], [26.8, 215.0], [26.9, 215.0], [27.0, 215.0], [27.1, 215.0], [27.2, 215.0], [27.3, 215.0], [27.4, 215.0], [27.5, 215.0], [27.6, 215.0], [27.7, 215.0], [27.8, 216.0], [27.9, 216.0], [28.0, 216.0], [28.1, 216.0], [28.2, 216.0], [28.3, 216.0], [28.4, 216.0], [28.5, 216.0], [28.6, 216.0], [28.7, 216.0], [28.8, 216.0], [28.9, 216.0], [29.0, 216.0], [29.1, 216.0], [29.2, 216.0], [29.3, 216.0], [29.4, 216.0], [29.5, 216.0], [29.6, 216.0], [29.7, 216.0], [29.8, 216.0], [29.9, 216.0], [30.0, 216.0], [30.1, 216.0], [30.2, 216.0], [30.3, 216.0], [30.4, 216.0], [30.5, 216.0], [30.6, 216.0], [30.7, 216.0], [30.8, 216.0], [30.9, 216.0], [31.0, 216.0], [31.1, 216.0], [31.2, 216.0], [31.3, 216.0], [31.4, 216.0], [31.5, 216.0], [31.6, 217.0], [31.7, 217.0], [31.8, 217.0], [31.9, 217.0], [32.0, 217.0], [32.1, 217.0], [32.2, 217.0], [32.3, 217.0], [32.4, 217.0], [32.5, 217.0], [32.6, 217.0], [32.7, 217.0], [32.8, 217.0], [32.9, 217.0], [33.0, 217.0], [33.1, 217.0], [33.2, 217.0], [33.3, 217.0], [33.4, 217.0], [33.5, 217.0], [33.6, 217.0], [33.7, 217.0], [33.8, 217.0], [33.9, 217.0], [34.0, 217.0], [34.1, 217.0], [34.2, 217.0], [34.3, 217.0], [34.4, 217.0], [34.5, 217.0], [34.6, 217.0], [34.7, 217.0], [34.8, 218.0], [34.9, 218.0], [35.0, 218.0], [35.1, 218.0], [35.2, 218.0], [35.3, 218.0], [35.4, 218.0], [35.5, 218.0], [35.6, 218.0], [35.7, 218.0], [35.8, 218.0], [35.9, 218.0], [36.0, 218.0], [36.1, 218.0], [36.2, 218.0], [36.3, 218.0], [36.4, 218.0], [36.5, 218.0], [36.6, 218.0], [36.7, 218.0], [36.8, 218.0], [36.9, 218.0], [37.0, 218.0], [37.1, 218.0], [37.2, 218.0], [37.3, 219.0], [37.4, 219.0], [37.5, 219.0], [37.6, 219.0], [37.7, 219.0], [37.8, 219.0], [37.9, 219.0], [38.0, 219.0], [38.1, 219.0], [38.2, 219.0], [38.3, 219.0], [38.4, 219.0], [38.5, 219.0], [38.6, 219.0], [38.7, 219.0], [38.8, 219.0], [38.9, 219.0], [39.0, 220.0], [39.1, 220.0], [39.2, 220.0], [39.3, 220.0], [39.4, 220.0], [39.5, 220.0], [39.6, 220.0], [39.7, 220.0], [39.8, 220.0], [39.9, 220.0], [40.0, 220.0], [40.1, 220.0], [40.2, 220.0], [40.3, 221.0], [40.4, 221.0], [40.5, 221.0], [40.6, 221.0], [40.7, 221.0], [40.8, 221.0], [40.9, 221.0], [41.0, 221.0], [41.1, 222.0], [41.2, 222.0], [41.3, 222.0], [41.4, 222.0], [41.5, 222.0], [41.6, 222.0], [41.7, 223.0], [41.8, 223.0], [41.9, 223.0], [42.0, 223.0], [42.1, 223.0], [42.2, 224.0], [42.3, 224.0], [42.4, 224.0], [42.5, 224.0], [42.6, 225.0], [42.7, 225.0], [42.8, 225.0], [42.9, 225.0], [43.0, 226.0], [43.1, 226.0], [43.2, 226.0], [43.3, 226.0], [43.4, 227.0], [43.5, 227.0], [43.6, 227.0], [43.7, 227.0], [43.8, 228.0], [43.9, 228.0], [44.0, 228.0], [44.1, 229.0], [44.2, 229.0], [44.3, 229.0], [44.4, 230.0], [44.5, 230.0], [44.6, 230.0], [44.7, 231.0], [44.8, 231.0], [44.9, 231.0], [45.0, 232.0], [45.1, 232.0], [45.2, 232.0], [45.3, 233.0], [45.4, 233.0], [45.5, 233.0], [45.6, 234.0], [45.7, 234.0], [45.8, 234.0], [45.9, 235.0], [46.0, 235.0], [46.1, 235.0], [46.2, 236.0], [46.3, 236.0], [46.4, 236.0], [46.5, 237.0], [46.6, 237.0], [46.7, 237.0], [46.8, 238.0], [46.9, 238.0], [47.0, 238.0], [47.1, 239.0], [47.2, 239.0], [47.3, 239.0], [47.4, 239.0], [47.5, 239.0], [47.6, 240.0], [47.7, 240.0], [47.8, 240.0], [47.9, 240.0], [48.0, 240.0], [48.1, 240.0], [48.2, 241.0], [48.3, 241.0], [48.4, 241.0], [48.5, 241.0], [48.6, 241.0], [48.7, 241.0], [48.8, 241.0], [48.9, 242.0], [49.0, 242.0], [49.1, 242.0], [49.2, 242.0], [49.3, 242.0], [49.4, 242.0], [49.5, 242.0], [49.6, 243.0], [49.7, 243.0], [49.8, 243.0], [49.9, 243.0], [50.0, 243.0], [50.1, 243.0], [50.2, 243.0], [50.3, 244.0], [50.4, 244.0], [50.5, 244.0], [50.6, 244.0], [50.7, 244.0], [50.8, 244.0], [50.9, 245.0], [51.0, 245.0], [51.1, 245.0], [51.2, 245.0], [51.3, 245.0], [51.4, 246.0], [51.5, 246.0], [51.6, 246.0], [51.7, 246.0], [51.8, 247.0], [51.9, 247.0], [52.0, 247.0], [52.1, 247.0], [52.2, 248.0], [52.3, 248.0], [52.4, 248.0], [52.5, 248.0], [52.6, 249.0], [52.7, 249.0], [52.8, 249.0], [52.9, 250.0], [53.0, 250.0], [53.1, 250.0], [53.2, 250.0], [53.3, 251.0], [53.4, 251.0], [53.5, 251.0], [53.6, 251.0], [53.7, 252.0], [53.8, 252.0], [53.9, 252.0], [54.0, 252.0], [54.1, 253.0], [54.2, 253.0], [54.3, 253.0], [54.4, 253.0], [54.5, 254.0], [54.6, 254.0], [54.7, 254.0], [54.8, 254.0], [54.9, 255.0], [55.0, 255.0], [55.1, 255.0], [55.2, 255.0], [55.3, 256.0], [55.4, 256.0], [55.5, 256.0], [55.6, 256.0], [55.7, 257.0], [55.8, 257.0], [55.9, 257.0], [56.0, 257.0], [56.1, 258.0], [56.2, 258.0], [56.3, 258.0], [56.4, 259.0], [56.5, 259.0], [56.6, 259.0], [56.7, 259.0], [56.8, 260.0], [56.9, 260.0], [57.0, 260.0], [57.1, 260.0], [57.2, 261.0], [57.3, 261.0], [57.4, 261.0], [57.5, 261.0], [57.6, 262.0], [57.7, 262.0], [57.8, 262.0], [57.9, 263.0], [58.0, 263.0], [58.1, 263.0], [58.2, 263.0], [58.3, 264.0], [58.4, 264.0], [58.5, 264.0], [58.6, 265.0], [58.7, 265.0], [58.8, 265.0], [58.9, 265.0], [59.0, 266.0], [59.1, 266.0], [59.2, 266.0], [59.3, 267.0], [59.4, 267.0], [59.5, 267.0], [59.6, 268.0], [59.7, 268.0], [59.8, 268.0], [59.9, 268.0], [60.0, 269.0], [60.1, 269.0], [60.2, 269.0], [60.3, 270.0], [60.4, 270.0], [60.5, 270.0], [60.6, 270.0], [60.7, 271.0], [60.8, 271.0], [60.9, 271.0], [61.0, 272.0], [61.1, 272.0], [61.2, 272.0], [61.3, 273.0], [61.4, 273.0], [61.5, 273.0], [61.6, 274.0], [61.7, 274.0], [61.8, 274.0], [61.9, 275.0], [62.0, 275.0], [62.1, 275.0], [62.2, 276.0], [62.3, 276.0], [62.4, 276.0], [62.5, 276.0], [62.6, 277.0], [62.7, 277.0], [62.8, 277.0], [62.9, 278.0], [63.0, 278.0], [63.1, 278.0], [63.2, 278.0], [63.3, 279.0], [63.4, 279.0], [63.5, 279.0], [63.6, 280.0], [63.7, 280.0], [63.8, 280.0], [63.9, 280.0], [64.0, 281.0], [64.1, 281.0], [64.2, 281.0], [64.3, 281.0], [64.4, 282.0], [64.5, 282.0], [64.6, 282.0], [64.7, 282.0], [64.8, 283.0], [64.9, 283.0], [65.0, 283.0], [65.1, 283.0], [65.2, 284.0], [65.3, 284.0], [65.4, 284.0], [65.5, 284.0], [65.6, 284.0], [65.7, 285.0], [65.8, 285.0], [65.9, 285.0], [66.0, 285.0], [66.1, 286.0], [66.2, 286.0], [66.3, 286.0], [66.4, 286.0], [66.5, 287.0], [66.6, 287.0], [66.7, 287.0], [66.8, 287.0], [66.9, 288.0], [67.0, 288.0], [67.1, 288.0], [67.2, 288.0], [67.3, 289.0], [67.4, 289.0], [67.5, 289.0], [67.6, 289.0], [67.7, 290.0], [67.8, 290.0], [67.9, 290.0], [68.0, 290.0], [68.1, 290.0], [68.2, 291.0], [68.3, 291.0], [68.4, 291.0], [68.5, 291.0], [68.6, 292.0], [68.7, 292.0], [68.8, 292.0], [68.9, 292.0], [69.0, 293.0], [69.1, 293.0], [69.2, 293.0], [69.3, 293.0], [69.4, 294.0], [69.5, 294.0], [69.6, 294.0], [69.7, 294.0], [69.8, 294.0], [69.9, 295.0], [70.0, 295.0], [70.1, 295.0], [70.2, 295.0], [70.3, 295.0], [70.4, 296.0], [70.5, 296.0], [70.6, 296.0], [70.7, 296.0], [70.8, 297.0], [70.9, 297.0], [71.0, 297.0], [71.1, 297.0], [71.2, 297.0], [71.3, 298.0], [71.4, 298.0], [71.5, 298.0], [71.6, 298.0], [71.7, 298.0], [71.8, 299.0], [71.9, 299.0], [72.0, 299.0], [72.1, 299.0], [72.2, 299.0], [72.3, 300.0], [72.4, 300.0], [72.5, 300.0], [72.6, 300.0], [72.7, 300.0], [72.8, 301.0], [72.9, 301.0], [73.0, 301.0], [73.1, 301.0], [73.2, 301.0], [73.3, 302.0], [73.4, 302.0], [73.5, 302.0], [73.6, 302.0], [73.7, 302.0], [73.8, 303.0], [73.9, 303.0], [74.0, 303.0], [74.1, 303.0], [74.2, 303.0], [74.3, 303.0], [74.4, 304.0], [74.5, 304.0], [74.6, 304.0], [74.7, 304.0], [74.8, 304.0], [74.9, 305.0], [75.0, 305.0], [75.1, 305.0], [75.2, 305.0], [75.3, 305.0], [75.4, 305.0], [75.5, 306.0], [75.6, 306.0], [75.7, 306.0], [75.8, 306.0], [75.9, 306.0], [76.0, 307.0], [76.1, 307.0], [76.2, 307.0], [76.3, 307.0], [76.4, 307.0], [76.5, 307.0], [76.6, 308.0], [76.7, 308.0], [76.8, 308.0], [76.9, 308.0], [77.0, 308.0], [77.1, 308.0], [77.2, 309.0], [77.3, 309.0], [77.4, 309.0], [77.5, 309.0], [77.6, 309.0], [77.7, 309.0], [77.8, 310.0], [77.9, 310.0], [78.0, 310.0], [78.1, 310.0], [78.2, 310.0], [78.3, 310.0], [78.4, 311.0], [78.5, 311.0], [78.6, 311.0], [78.7, 311.0], [78.8, 311.0], [78.9, 311.0], [79.0, 312.0], [79.1, 312.0], [79.2, 312.0], [79.3, 312.0], [79.4, 312.0], [79.5, 312.0], [79.6, 313.0], [79.7, 313.0], [79.8, 313.0], [79.9, 313.0], [80.0, 313.0], [80.1, 313.0], [80.2, 313.0], [80.3, 314.0], [80.4, 314.0], [80.5, 314.0], [80.6, 314.0], [80.7, 314.0], [80.8, 314.0], [80.9, 314.0], [81.0, 315.0], [81.1, 315.0], [81.2, 315.0], [81.3, 315.0], [81.4, 315.0], [81.5, 315.0], [81.6, 316.0], [81.7, 316.0], [81.8, 316.0], [81.9, 316.0], [82.0, 316.0], [82.1, 316.0], [82.2, 317.0], [82.3, 317.0], [82.4, 317.0], [82.5, 317.0], [82.6, 317.0], [82.7, 317.0], [82.8, 317.0], [82.9, 318.0], [83.0, 318.0], [83.1, 318.0], [83.2, 318.0], [83.3, 318.0], [83.4, 318.0], [83.5, 318.0], [83.6, 319.0], [83.7, 319.0], [83.8, 319.0], [83.9, 319.0], [84.0, 319.0], [84.1, 319.0], [84.2, 320.0], [84.3, 320.0], [84.4, 320.0], [84.5, 320.0], [84.6, 320.0], [84.7, 320.0], [84.8, 320.0], [84.9, 321.0], [85.0, 321.0], [85.1, 321.0], [85.2, 321.0], [85.3, 321.0], [85.4, 321.0], [85.5, 322.0], [85.6, 322.0], [85.7, 322.0], [85.8, 322.0], [85.9, 322.0], [86.0, 322.0], [86.1, 322.0], [86.2, 323.0], [86.3, 323.0], [86.4, 323.0], [86.5, 323.0], [86.6, 323.0], [86.7, 323.0], [86.8, 324.0], [86.9, 324.0], [87.0, 324.0], [87.1, 324.0], [87.2, 324.0], [87.3, 324.0], [87.4, 325.0], [87.5, 325.0], [87.6, 325.0], [87.7, 325.0], [87.8, 325.0], [87.9, 325.0], [88.0, 326.0], [88.1, 326.0], [88.2, 326.0], [88.3, 326.0], [88.4, 326.0], [88.5, 326.0], [88.6, 326.0], [88.7, 327.0], [88.8, 327.0], [88.9, 327.0], [89.0, 327.0], [89.1, 327.0], [89.2, 327.0], [89.3, 328.0], [89.4, 328.0], [89.5, 328.0], [89.6, 328.0], [89.7, 328.0], [89.8, 328.0], [89.9, 329.0], [90.0, 329.0], [90.1, 329.0], [90.2, 329.0], [90.3, 329.0], [90.4, 330.0], [90.5, 330.0], [90.6, 330.0], [90.7, 330.0], [90.8, 330.0], [90.9, 330.0], [91.0, 331.0], [91.1, 331.0], [91.2, 331.0], [91.3, 331.0], [91.4, 331.0], [91.5, 332.0], [91.6, 332.0], [91.7, 332.0], [91.8, 332.0], [91.9, 332.0], [92.0, 333.0], [92.1, 333.0], [92.2, 333.0], [92.3, 333.0], [92.4, 334.0], [92.5, 334.0], [92.6, 334.0], [92.7, 334.0], [92.8, 335.0], [92.9, 335.0], [93.0, 335.0], [93.1, 335.0], [93.2, 336.0], [93.3, 336.0], [93.4, 336.0], [93.5, 337.0], [93.6, 337.0], [93.7, 337.0], [93.8, 338.0], [93.9, 338.0], [94.0, 338.0], [94.1, 339.0], [94.2, 339.0], [94.3, 339.0], [94.4, 340.0], [94.5, 340.0], [94.6, 340.0], [94.7, 341.0], [94.8, 341.0], [94.9, 342.0], [95.0, 342.0], [95.1, 343.0], [95.2, 343.0], [95.3, 344.0], [95.4, 344.0], [95.5, 345.0], [95.6, 346.0], [95.7, 346.0], [95.8, 347.0], [95.9, 348.0], [96.0, 348.0], [96.1, 349.0], [96.2, 350.0], [96.3, 351.0], [96.4, 352.0], [96.5, 353.0], [96.6, 355.0], [96.7, 356.0], [96.8, 358.0], [96.9, 359.0], [97.0, 361.0], [97.1, 363.0], [97.2, 366.0], [97.3, 368.0], [97.4, 370.0], [97.5, 372.0], [97.6, 375.0], [97.7, 377.0], [97.8, 380.0], [97.9, 383.0], [98.0, 386.0], [98.1, 389.0], [98.2, 393.0], [98.3, 398.0], [98.4, 407.0], [98.5, 422.0], [98.6, 519.0], [98.7, 991.0], [98.8, 1018.0], [98.9, 1039.0], [99.0, 1073.0], [99.1, 1106.0], [99.2, 1140.0], [99.3, 1180.0], [99.4, 1273.0], [99.5, 1417.0], [99.6, 1950.0], [99.7, 2053.0], [99.8, 2146.0], [99.9, 2351.0], [100.0, 2867.0]], "isOverall": false, "label": "logs", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 26.0, "minX": 0.0, "maxY": 343637.0, "series": [{"data": [[0.0, 1921.0], [600.0, 49.0], [700.0, 37.0], [800.0, 43.0], [900.0, 398.0], [1000.0, 1782.0], [1100.0, 1328.0], [1200.0, 387.0], [1300.0, 385.0], [1400.0, 175.0], [1500.0, 79.0], [100.0, 15510.0], [1600.0, 48.0], [1700.0, 63.0], [1800.0, 58.0], [1900.0, 257.0], [2000.0, 709.0], [2100.0, 290.0], [2200.0, 246.0], [2300.0, 200.0], [2400.0, 112.0], [2500.0, 129.0], [2600.0, 115.0], [2700.0, 33.0], [2800.0, 26.0], [200.0, 343637.0], [300.0, 130524.0], [400.0, 1368.0], [500.0, 91.0]], "isOverall": false, "label": "logs", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2800.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 640.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 492964.0, "series": [{"data": [[0.0, 492964.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 640.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 6396.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 10.834048640915608, "minX": 1.7003901E12, "maxY": 100.0, "series": [{"data": [[1.70039082E12, 100.0], [1.70039016E12, 94.76405447834007], [1.70039112E12, 100.0], [1.70039022E12, 100.0], [1.70039118E12, 100.0], [1.70039052E12, 100.0], [1.70039148E12, 82.92758243760238], [1.7003901E12, 10.834048640915608], [1.70039106E12, 100.0], [1.7003904E12, 100.0], [1.70039136E12, 100.0], [1.70039046E12, 100.0], [1.70039142E12, 99.89927928734502], [1.70039076E12, 100.0], [1.70039034E12, 100.0], [1.7003913E12, 100.0], [1.70039064E12, 100.0], [1.7003907E12, 100.0], [1.700391E12, 100.0], [1.70039058E12, 100.0], [1.70039088E12, 100.0], [1.70039094E12, 100.0], [1.70039028E12, 100.0], [1.70039124E12, 100.0]], "isOverall": false, "label": "log_generator", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70039148E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 7.172413793103449, "minX": 1.0, "maxY": 1981.821428571429, "series": [{"data": [[2.0, 7.172413793103449], [3.0, 8.378378378378377], [4.0, 10.512195121951216], [5.0, 13.37837837837838], [6.0, 14.749999999999998], [7.0, 17.650000000000006], [8.0, 20.133333333333326], [9.0, 22.76086956521739], [10.0, 25.478260869565215], [11.0, 28.76923076923078], [12.0, 28.478260869565215], [13.0, 31.22222222222222], [14.0, 35.03448275862069], [15.0, 37.21951219512194], [16.0, 39.17391304347826], [17.0, 43.190476190476204], [18.0, 44.568181818181806], [19.0, 47.04545454545453], [20.0, 53.11363636363637], [21.0, 49.66153846153846], [22.0, 52.903846153846146], [23.0, 55.00000000000001], [24.0, 59.28], [25.0, 61.355555555555554], [26.0, 62.70212765957448], [27.0, 64.49122807017545], [28.0, 72.06249999999997], [29.0, 82.66666666666666], [30.0, 79.0], [31.0, 75.35087719298245], [32.0, 76.11363636363635], [33.0, 79.26190476190477], [34.0, 84.28], [35.0, 87.96078431372547], [36.0, 91.68627450980394], [37.0, 95.83720930232556], [38.0, 97.525], [39.0, 92.80000000000001], [40.0, 94.34313725490193], [41.0, 104.3214285714286], [42.0, 102.40845070422534], [43.0, 106.91666666666667], [44.0, 107.70149253731343], [45.0, 104.96923076923076], [46.0, 106.84615384615384], [47.0, 111.1842105263158], [48.0, 108.24999999999999], [49.0, 114.42105263157896], [50.0, 119.44827586206898], [51.0, 115.81690140845069], [52.0, 116.5725190839695], [53.0, 122.56790123456791], [54.0, 125.16666666666663], [55.0, 124.44696969696967], [56.0, 131.83076923076922], [57.0, 136.61702127659572], [58.0, 134.7183098591549], [59.0, 139.34693877551018], [60.0, 133.4836601307189], [61.0, 137.60846560846556], [62.0, 151.57692307692307], [63.0, 145.63809523809513], [64.0, 146.09032258064525], [65.0, 169.60606060606062], [66.0, 199.16000000000003], [67.0, 162.57077625570784], [68.0, 184.46428571428575], [69.0, 155.50724637681154], [70.0, 191.30232558139534], [71.0, 183.111801242236], [72.0, 181.9365079365079], [73.0, 169.45323741007198], [74.0, 176.36125654450265], [75.0, 187.70967741935482], [76.0, 176.78658536585374], [77.0, 186.43518518518513], [78.0, 172.1895161290321], [79.0, 172.3155080213903], [80.0, 175.3316062176166], [81.0, 179.02846975088966], [82.0, 184.88111888111882], [83.0, 191.43543543543535], [84.0, 189.38834951456306], [85.0, 191.86274509803914], [86.0, 186.65994236311246], [87.0, 196.92307692307693], [88.0, 189.98633879781414], [89.0, 201.44078947368413], [90.0, 215.22459893048136], [91.0, 216.556603773585], [92.0, 1367.5540540540546], [93.0, 1981.821428571429], [94.0, 1015.3333333333329], [95.0, 1127.9717083786732], [96.0, 321.8660714285712], [97.0, 307.3224005582688], [98.0, 317.19932998325], [99.0, 304.5417348608845], [100.0, 270.1706413751378], [1.0, 25.0]], "isOverall": false, "label": "logs", "isController": false}, {"data": [[99.24919199999835, 273.6221999999988]], "isOverall": false, "label": "logs-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 4112.45, "minX": 1.7003901E12, "maxY": 184285.25, "series": [{"data": [[1.70039082E12, 135651.41666666666], [1.70039016E12, 139052.65], [1.70039112E12, 135089.33333333334], [1.70039022E12, 136980.3], [1.70039118E12, 133858.66666666666], [1.70039052E12, 136970.83333333334], [1.70039148E12, 64953.166666666664], [1.7003901E12, 4112.45], [1.70039106E12, 134645.58333333334], [1.7003904E12, 140349.6], [1.70039136E12, 132628.0], [1.70039046E12, 138526.91666666666], [1.70039142E12, 132172.41666666666], [1.70039076E12, 135704.66666666666], [1.70039034E12, 142750.5], [1.7003913E12, 133030.33333333334], [1.70039064E12, 135385.16666666666], [1.7003907E12, 135633.66666666666], [1.700391E12, 132651.66666666666], [1.70039058E12, 135201.75], [1.70039088E12, 135627.75], [1.70039094E12, 81910.33333333333], [1.70039028E12, 90871.8], [1.70039124E12, 133042.16666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70039082E12, 174627.31666666668], [1.70039016E12, 179517.21666666667], [1.70039112E12, 173903.73333333334], [1.70039022E12, 176836.15], [1.70039118E12, 172319.46666666667], [1.70039052E12, 176325.83333333334], [1.70039148E12, 83615.76666666666], [1.7003901E12, 5324.05], [1.70039106E12, 173332.48333333334], [1.7003904E12, 180758.73333333334], [1.70039136E12, 170735.2], [1.70039046E12, 178329.01666666666], [1.70039142E12, 170148.71666666667], [1.70039076E12, 174695.86666666667], [1.70039034E12, 184285.25], [1.7003913E12, 171253.13333333333], [1.70039064E12, 174284.56666666668], [1.7003907E12, 174604.46666666667], [1.700391E12, 170765.66666666666], [1.70039058E12, 174048.45], [1.70039088E12, 174596.85], [1.70039094E12, 105445.13333333333], [1.70039028E12, 117311.9], [1.70039124E12, 171268.36666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70039148E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 27.15879828326178, "minX": 1.7003901E12, "maxY": 470.2919475314275, "series": [{"data": [[1.70039082E12, 261.4285776595272], [1.70039016E12, 240.42908057193628], [1.70039112E12, 262.6507095304839], [1.70039022E12, 256.683077055605], [1.70039118E12, 265.0373497171139], [1.70039052E12, 258.99464362851114], [1.70039148E12, 470.2919475314275], [1.7003901E12, 27.15879828326178], [1.70039106E12, 263.7728171551611], [1.7003904E12, 252.56282656329157], [1.70039136E12, 267.5740988579603], [1.70039046E12, 256.4595737410817], [1.70039142E12, 268.13532387304906], [1.70039076E12, 261.53705964422875], [1.70039034E12, 248.10320314114537], [1.7003913E12, 267.0752535136107], [1.70039064E12, 262.00384581767423], [1.7003907E12, 261.86005932647066], [1.700391E12, 272.0770740410334], [1.70039058E12, 262.6354645310927], [1.70039088E12, 261.64581424770125], [1.70039094E12, 425.9227101993648], [1.70039028E12, 391.75464225425617], [1.70039124E12, 266.74103886863105]], "isOverall": false, "label": "logs", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70039148E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 27.147353361945633, "minX": 1.7003901E12, "maxY": 470.28538895973924, "series": [{"data": [[1.70039082E12, 261.42177345487744], [1.70039016E12, 240.4227587084719], [1.70039112E12, 262.64462158374243], [1.70039022E12, 256.6775207821844], [1.70039118E12, 265.03142680339454], [1.70039052E12, 258.98933045356296], [1.70039148E12, 470.28538895973924], [1.7003901E12, 27.147353361945633], [1.70039106E12, 263.76653337434664], [1.7003904E12, 252.55726445305743], [1.70039136E12, 267.5678979300504], [1.70039046E12, 256.45342331183554], [1.70039142E12, 268.13022069027204], [1.70039076E12, 261.53113010115385], [1.70039034E12, 248.09749948336412], [1.7003913E12, 267.06938267212144], [1.70039064E12, 261.99750895900803], [1.7003907E12, 261.8550427499554], [1.700391E12, 272.07051739518386], [1.70039058E12, 262.62903155223114], [1.70039088E12, 261.6395323474241], [1.70039094E12, 425.91707598959886], [1.70039028E12, 391.74873393065894], [1.70039124E12, 266.73503513297294]], "isOverall": false, "label": "logs", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70039148E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 6.460783046905276E-4, "minX": 1.7003901E12, "maxY": 0.015736766809728197, "series": [{"data": [[1.70039082E12, 8.287172329567779E-4], [1.70039016E12, 0.001739573168144605], [1.70039112E12, 9.635599159075045E-4], [1.70039022E12, 6.460783046905276E-4], [1.70039118E12, 9.724186704384751E-4], [1.70039052E12, 8.639308855291671E-4], [1.70039148E12, 0.0023683731098560635], [1.7003901E12, 0.015736766809728197], [1.70039106E12, 0.0010546205563123443], [1.7003904E12, 0.0010534299679757348], [1.70039136E12, 7.137758743754405E-4], [1.70039046E12, 8.115149703156299E-4], [1.70039142E12, 7.162361788799816E-4], [1.70039076E12, 0.001002790373212422], [1.70039034E12, 9.092787766067363E-4], [1.7003913E12, 0.0010674257249599747], [1.70039064E12, 0.0010051568918800833], [1.7003907E12, 8.724480893386992E-4], [1.700391E12, 8.028545941124058E-4], [1.70039058E12, 0.0013566145901711133], [1.70039088E12, 0.0010033590716747515], [1.70039094E12, 0.001878069921987861], [1.70039028E12, 0.0018828723542396984], [1.70039124E12, 6.670817397491779E-4]], "isOverall": false, "label": "logs", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70039148E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 6.0, "minX": 1.7003901E12, "maxY": 1000.0, "series": [{"data": [[1.70039082E12, 549.0], [1.70039016E12, 404.0], [1.70039112E12, 444.0], [1.70039022E12, 996.0], [1.70039118E12, 482.0], [1.70039052E12, 471.0], [1.70039148E12, 1000.0], [1.7003901E12, 82.0], [1.70039106E12, 458.0], [1.7003904E12, 425.0], [1.70039136E12, 478.0], [1.70039046E12, 484.0], [1.70039142E12, 489.0], [1.70039076E12, 416.0], [1.70039034E12, 444.0], [1.7003913E12, 475.0], [1.70039064E12, 483.0], [1.7003907E12, 486.0], [1.700391E12, 958.0], [1.70039058E12, 435.0], [1.70039088E12, 425.0], [1.70039094E12, 1000.0], [1.70039028E12, 1000.0], [1.70039124E12, 460.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70039082E12, 331.0], [1.70039016E12, 298.0], [1.70039112E12, 330.0], [1.70039022E12, 302.0], [1.70039118E12, 331.0], [1.70039052E12, 321.0], [1.70039148E12, 328.0], [1.7003901E12, 44.0], [1.70039106E12, 327.0], [1.7003904E12, 306.0], [1.70039136E12, 333.0], [1.70039046E12, 315.0], [1.70039142E12, 335.0], [1.70039076E12, 330.0], [1.70039034E12, 301.0], [1.7003913E12, 336.0], [1.70039064E12, 327.0], [1.7003907E12, 328.0], [1.700391E12, 318.0], [1.70039058E12, 323.0], [1.70039088E12, 332.0], [1.70039094E12, 324.0], [1.70039028E12, 253.0], [1.70039124E12, 331.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70039082E12, 386.0], [1.70039016E12, 348.0], [1.70039112E12, 383.0], [1.70039022E12, 344.0], [1.70039118E12, 382.9900000000016], [1.70039052E12, 376.0], [1.70039148E12, 415.0], [1.7003901E12, 56.0], [1.70039106E12, 378.0], [1.7003904E12, 336.0], [1.70039136E12, 384.9900000000016], [1.70039046E12, 370.0], [1.70039142E12, 387.0], [1.70039076E12, 361.0], [1.70039034E12, 340.0], [1.7003913E12, 389.0], [1.70039064E12, 376.0], [1.7003907E12, 398.0], [1.700391E12, 358.0], [1.70039058E12, 364.0], [1.70039088E12, 389.0], [1.70039094E12, 978.0], [1.70039028E12, 967.0], [1.70039124E12, 381.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70039082E12, 340.0], [1.70039016E12, 316.0], [1.70039112E12, 339.0], [1.70039022E12, 318.0], [1.70039118E12, 341.0], [1.70039052E12, 330.0], [1.70039148E12, 339.0], [1.7003901E12, 47.0], [1.70039106E12, 334.0], [1.7003904E12, 313.0], [1.70039136E12, 345.0], [1.70039046E12, 326.0], [1.70039142E12, 346.0], [1.70039076E12, 338.0], [1.70039034E12, 316.0], [1.7003913E12, 352.0], [1.70039064E12, 334.0], [1.7003907E12, 337.0], [1.700391E12, 327.0], [1.70039058E12, 331.0], [1.70039088E12, 342.0], [1.70039094E12, 334.0], [1.70039028E12, 278.0], [1.70039124E12, 341.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.70039082E12, 167.0], [1.70039016E12, 47.0], [1.70039112E12, 169.0], [1.70039022E12, 166.0], [1.70039118E12, 177.0], [1.70039052E12, 166.0], [1.70039148E12, 6.0], [1.7003901E12, 6.0], [1.70039106E12, 180.0], [1.7003904E12, 160.0], [1.70039136E12, 177.0], [1.70039046E12, 162.0], [1.70039142E12, 172.0], [1.70039076E12, 166.0], [1.70039034E12, 160.0], [1.7003913E12, 177.0], [1.70039064E12, 163.0], [1.7003907E12, 165.0], [1.700391E12, 180.0], [1.70039058E12, 168.0], [1.70039088E12, 175.0], [1.70039094E12, 171.0], [1.70039028E12, 195.0], [1.70039124E12, 169.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70039082E12, 257.0], [1.70039016E12, 248.0], [1.70039112E12, 225.0], [1.70039022E12, 252.0], [1.70039118E12, 233.0], [1.70039052E12, 251.0], [1.70039148E12, 187.0], [1.7003901E12, 27.0], [1.70039106E12, 241.0], [1.7003904E12, 228.0], [1.70039136E12, 243.0], [1.70039046E12, 239.0], [1.70039142E12, 244.0], [1.70039076E12, 258.0], [1.70039034E12, 216.0], [1.7003913E12, 241.0], [1.70039064E12, 262.0], [1.7003907E12, 258.0], [1.700391E12, 227.0], [1.70039058E12, 266.0], [1.70039088E12, 253.0], [1.70039094E12, 223.0], [1.70039028E12, 212.0], [1.70039124E12, 242.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70039148E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 56.0, "minX": 33.0, "maxY": 2589.0, "series": [{"data": [[81.0, 767.5], [89.0, 993.0], [88.0, 999.5], [94.0, 857.0], [95.0, 1000.0], [99.0, 999.0], [103.0, 969.0], [100.0, 988.0], [102.0, 968.0], [183.0, 221.0], [197.0, 319.0], [249.0, 325.5], [271.0, 348.0], [269.0, 336.0], [261.0, 288.0], [272.0, 362.0], [274.0, 365.5], [281.0, 323.0], [287.0, 324.0], [285.0, 339.0], [282.0, 337.5], [283.0, 56.0], [300.0, 321.5], [303.0, 328.0], [296.0, 332.0], [293.0, 342.0], [289.0, 337.0], [297.0, 331.0], [294.0, 325.0], [295.0, 337.0], [288.0, 364.0], [299.0, 323.0], [298.0, 333.0], [290.0, 329.0], [291.0, 327.0], [302.0, 322.0], [301.0, 329.0], [317.0, 318.0], [308.0, 319.0], [309.0, 321.0], [310.0, 323.0], [311.0, 320.0], [305.0, 319.0], [304.0, 327.0], [312.0, 319.0], [306.0, 325.0], [316.0, 317.0], [315.0, 319.0], [313.0, 320.0], [314.0, 319.0], [319.0, 313.0], [307.0, 325.0], [318.0, 317.0], [332.0, 310.0], [334.0, 295.0], [333.0, 298.0], [321.0, 312.0], [323.0, 310.0], [322.0, 319.0], [320.0, 310.0], [327.0, 307.0], [326.0, 309.0], [324.0, 312.0], [335.0, 301.0], [325.0, 310.0], [331.0, 305.0], [330.0, 307.0], [328.0, 313.0], [329.0, 304.0], [348.0, 285.0], [336.0, 300.0], [340.0, 294.0], [351.0, 287.0], [349.0, 291.0], [350.0, 287.0], [347.0, 287.0], [343.0, 294.0], [342.0, 300.0], [341.0, 292.0], [344.0, 292.0], [346.0, 292.0], [345.0, 282.0], [339.0, 294.0], [337.0, 300.0], [338.0, 301.0], [365.0, 282.0], [362.0, 270.0], [357.0, 285.0], [356.0, 288.0], [354.0, 290.0], [355.0, 283.0], [364.0, 280.0], [363.0, 286.0], [352.0, 286.0], [353.0, 287.0], [359.0, 294.0], [358.0, 296.0], [361.0, 280.0], [360.0, 284.0], [367.0, 264.0], [366.0, 279.0], [370.0, 275.0], [380.0, 247.0], [377.0, 271.0], [383.0, 257.0], [381.0, 251.0], [382.0, 233.0], [376.0, 273.5], [371.0, 279.0], [379.0, 261.0], [378.0, 269.0], [374.0, 257.0], [373.0, 257.0], [372.0, 256.0], [369.0, 278.0], [375.0, 262.5], [368.0, 284.0], [386.0, 249.0], [391.0, 220.0], [388.0, 241.0], [389.0, 247.0], [390.0, 244.0], [392.0, 240.5], [394.0, 246.0], [395.0, 242.0], [397.0, 240.0], [398.0, 250.0], [399.0, 239.0], [387.0, 251.0], [396.0, 242.0], [393.0, 244.0], [385.0, 257.0], [384.0, 250.0], [403.0, 218.0], [409.0, 242.0], [410.0, 240.0], [411.0, 243.0], [413.0, 241.0], [407.0, 233.0], [401.0, 234.0], [402.0, 231.0], [400.0, 237.0], [404.0, 249.0], [405.0, 243.0], [406.0, 234.0], [412.0, 241.0], [415.0, 241.0], [414.0, 241.0], [408.0, 226.0], [428.0, 218.0], [416.0, 212.0], [423.0, 216.0], [417.0, 221.0], [430.0, 220.0], [429.0, 222.0], [422.0, 219.0], [421.0, 217.0], [420.0, 222.0], [418.0, 220.0], [419.0, 219.0], [425.0, 218.0], [431.0, 217.0], [424.0, 217.0], [427.0, 216.5], [426.0, 216.0], [432.0, 215.0], [447.0, 215.0], [446.0, 218.0], [436.0, 218.0], [437.0, 217.0], [440.0, 218.0], [442.0, 217.0], [443.0, 216.0], [438.0, 217.0], [433.0, 218.0], [434.0, 217.0], [439.0, 215.0], [444.0, 215.0], [445.0, 215.0], [435.0, 217.0], [450.0, 218.0], [457.0, 217.0], [459.0, 217.0], [458.0, 217.0], [460.0, 216.0], [451.0, 215.0], [449.0, 216.0], [455.0, 216.0], [448.0, 211.0], [454.0, 218.0], [452.0, 216.0], [453.0, 218.0], [462.0, 216.0], [456.0, 214.0], [463.0, 215.0], [461.0, 216.0], [476.0, 210.0], [472.0, 212.0], [478.0, 210.0], [477.0, 213.0], [470.0, 212.0], [466.0, 214.0], [464.0, 215.0], [465.0, 214.0], [471.0, 212.0], [473.0, 211.0], [467.0, 213.0], [474.0, 211.0], [475.0, 211.0], [469.0, 213.0], [468.0, 214.0], [483.0, 212.0], [485.0, 214.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 2589.0], [37.0, 2354.5], [36.0, 2584.5], [38.0, 2286.0], [40.0, 2239.5], [41.0, 1957.0], [43.0, 2087.0], [42.0, 2262.0], [45.0, 2196.0], [44.0, 2104.0], [47.0, 2253.0], [46.0, 2328.0], [48.0, 2009.5], [49.0, 2023.0], [51.0, 1875.0], [50.0, 1946.0], [52.0, 1841.5], [53.0, 2243.0], [58.0, 1372.0], [60.0, 1360.0], [63.0, 1364.0], [67.0, 1416.0], [69.0, 1369.0], [75.0, 1181.0], [74.0, 1208.5], [79.0, 1141.0], [76.0, 1236.5], [83.0, 1071.0], [81.0, 1105.5], [80.0, 1192.5], [85.0, 1155.0], [87.0, 1106.0], [86.0, 1101.0], [90.0, 1110.0], [89.0, 1111.5], [88.0, 1053.0], [91.0, 1021.0], [94.0, 1042.0], [93.0, 1154.0], [95.0, 1009.0], [92.0, 1046.0], [99.0, 1010.0], [96.0, 1020.0], [97.0, 1015.0], [103.0, 1078.0], [100.0, 1027.0], [102.0, 1005.0], [183.0, 1972.5], [249.0, 1897.0], [362.0, 1893.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 485.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 56.0, "minX": 33.0, "maxY": 2589.0, "series": [{"data": [[81.0, 767.5], [89.0, 993.0], [88.0, 999.5], [94.0, 857.0], [95.0, 1000.0], [99.0, 999.0], [103.0, 969.0], [100.0, 988.0], [102.0, 968.0], [183.0, 221.0], [197.0, 319.0], [249.0, 325.5], [271.0, 348.0], [269.0, 336.0], [261.0, 288.0], [272.0, 362.0], [274.0, 365.5], [281.0, 323.0], [287.0, 324.0], [285.0, 339.0], [282.0, 337.5], [283.0, 56.0], [300.0, 321.5], [303.0, 328.0], [296.0, 332.0], [293.0, 342.0], [289.0, 337.0], [297.0, 331.0], [294.0, 325.0], [295.0, 337.0], [288.0, 364.0], [299.0, 323.0], [298.0, 333.0], [290.0, 329.0], [291.0, 327.0], [302.0, 322.0], [301.0, 329.0], [317.0, 318.0], [308.0, 319.0], [309.0, 321.0], [310.0, 323.0], [311.0, 320.0], [305.0, 319.0], [304.0, 327.0], [312.0, 319.0], [306.0, 325.0], [316.0, 317.0], [315.0, 319.0], [313.0, 320.0], [314.0, 319.0], [319.0, 313.0], [307.0, 325.0], [318.0, 317.0], [332.0, 310.0], [334.0, 295.0], [333.0, 298.0], [321.0, 312.0], [323.0, 310.0], [322.0, 319.0], [320.0, 310.0], [327.0, 307.0], [326.0, 309.0], [324.0, 312.0], [335.0, 301.0], [325.0, 310.0], [331.0, 305.0], [330.0, 307.0], [328.0, 313.0], [329.0, 304.0], [348.0, 285.0], [336.0, 300.0], [340.0, 294.0], [351.0, 287.0], [349.0, 291.0], [350.0, 287.0], [347.0, 287.0], [343.0, 294.0], [342.0, 300.0], [341.0, 292.0], [344.0, 292.0], [346.0, 292.0], [345.0, 282.0], [339.0, 294.0], [337.0, 300.0], [338.0, 301.0], [365.0, 282.0], [362.0, 270.0], [357.0, 285.0], [356.0, 288.0], [354.0, 290.0], [355.0, 283.0], [364.0, 280.0], [363.0, 286.0], [352.0, 286.0], [353.0, 287.0], [359.0, 294.0], [358.0, 296.0], [361.0, 280.0], [360.0, 284.0], [367.0, 264.0], [366.0, 279.0], [370.0, 275.0], [380.0, 247.0], [377.0, 271.0], [383.0, 257.0], [381.0, 251.0], [382.0, 233.0], [376.0, 273.5], [371.0, 279.0], [379.0, 261.0], [378.0, 269.0], [374.0, 257.0], [373.0, 257.0], [372.0, 256.0], [369.0, 278.0], [375.0, 262.5], [368.0, 284.0], [386.0, 249.0], [391.0, 220.0], [388.0, 241.0], [389.0, 247.0], [390.0, 244.0], [392.0, 240.5], [394.0, 246.0], [395.0, 242.0], [397.0, 240.0], [398.0, 250.0], [399.0, 239.0], [387.0, 251.0], [396.0, 242.0], [393.0, 244.0], [385.0, 257.0], [384.0, 250.0], [403.0, 218.0], [409.0, 242.0], [410.0, 240.0], [411.0, 243.0], [413.0, 241.0], [407.0, 233.0], [401.0, 234.0], [402.0, 231.0], [400.0, 237.0], [404.0, 249.0], [405.0, 243.0], [406.0, 234.0], [412.0, 241.0], [415.0, 241.0], [414.0, 241.0], [408.0, 226.0], [428.0, 218.0], [416.0, 212.0], [423.0, 216.0], [417.0, 221.0], [430.0, 220.0], [429.0, 222.0], [422.0, 219.0], [421.0, 217.0], [420.0, 222.0], [418.0, 220.0], [419.0, 219.0], [425.0, 218.0], [431.0, 217.0], [424.0, 217.0], [427.0, 216.5], [426.0, 216.0], [432.0, 215.0], [447.0, 215.0], [446.0, 218.0], [436.0, 218.0], [437.0, 217.0], [440.0, 218.0], [442.0, 216.0], [443.0, 216.0], [438.0, 217.0], [433.0, 218.0], [434.0, 217.0], [439.0, 215.0], [444.0, 215.0], [445.0, 215.0], [435.0, 217.0], [450.0, 218.0], [457.0, 217.0], [459.0, 217.0], [458.0, 217.0], [460.0, 216.0], [451.0, 215.0], [449.0, 216.0], [455.0, 216.0], [448.0, 211.0], [454.0, 218.0], [452.0, 216.0], [453.0, 218.0], [462.0, 216.0], [456.0, 214.0], [463.0, 215.0], [461.0, 216.0], [476.0, 210.0], [472.0, 212.0], [478.0, 210.0], [477.0, 213.0], [470.0, 212.0], [466.0, 214.0], [464.0, 215.0], [465.0, 214.0], [471.0, 212.0], [473.0, 211.0], [467.0, 213.0], [474.0, 211.0], [475.0, 211.0], [469.0, 213.0], [468.0, 214.0], [483.0, 212.0], [485.0, 214.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[33.0, 2589.0], [37.0, 2354.5], [36.0, 2584.5], [38.0, 2286.0], [40.0, 2239.5], [41.0, 1957.0], [43.0, 2087.0], [42.0, 2262.0], [45.0, 2196.0], [44.0, 2104.0], [47.0, 2253.0], [46.0, 2328.0], [48.0, 2009.5], [49.0, 2023.0], [51.0, 1875.0], [50.0, 1946.0], [52.0, 1841.5], [53.0, 2243.0], [58.0, 1372.0], [60.0, 1360.0], [63.0, 1364.0], [67.0, 1416.0], [69.0, 1369.0], [75.0, 1181.0], [74.0, 1208.5], [79.0, 1141.0], [76.0, 1236.5], [83.0, 1071.0], [81.0, 1105.5], [80.0, 1192.5], [85.0, 1155.0], [87.0, 1106.0], [86.0, 1101.0], [90.0, 1110.0], [89.0, 1111.5], [88.0, 1053.0], [91.0, 1021.0], [94.0, 1042.0], [93.0, 1154.0], [95.0, 1009.0], [92.0, 1046.0], [99.0, 1010.0], [96.0, 1020.0], [97.0, 1015.0], [103.0, 1078.0], [100.0, 1027.0], [102.0, 1005.0], [183.0, 1972.5], [249.0, 1897.0], [362.0, 1893.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 485.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 11.983333333333333, "minX": 1.7003901E12, "maxY": 403.25, "series": [{"data": [[1.70039082E12, 382.1166666666667], [1.70039016E12, 394.15], [1.70039112E12, 380.53333333333336], [1.70039022E12, 386.95], [1.70039118E12, 377.06666666666666], [1.70039052E12, 385.8333333333333], [1.70039148E12, 181.33333333333334], [1.7003901E12, 11.983333333333333], [1.70039106E12, 379.28333333333336], [1.7003904E12, 395.53333333333336], [1.70039136E12, 373.6], [1.70039046E12, 390.21666666666664], [1.70039142E12, 372.28333333333336], [1.70039076E12, 382.26666666666665], [1.70039034E12, 403.25], [1.7003913E12, 374.73333333333335], [1.70039064E12, 381.3666666666667], [1.7003907E12, 382.06666666666666], [1.700391E12, 373.6666666666667], [1.70039058E12, 380.85], [1.70039088E12, 382.05], [1.70039094E12, 230.73333333333332], [1.70039028E12, 256.7], [1.70039124E12, 374.76666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70039148E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 11.65, "minX": 1.7003901E12, "maxY": 403.25, "series": [{"data": [[1.70039082E12, 382.1166666666667], [1.70039016E12, 392.81666666666666], [1.70039112E12, 380.53333333333336], [1.70039022E12, 386.95], [1.70039118E12, 377.06666666666666], [1.70039052E12, 385.8333333333333], [1.70039148E12, 182.96666666666667], [1.7003901E12, 11.65], [1.70039106E12, 379.28333333333336], [1.7003904E12, 395.53333333333336], [1.70039136E12, 373.6], [1.70039046E12, 390.21666666666664], [1.70039142E12, 372.31666666666666], [1.70039076E12, 382.26666666666665], [1.70039034E12, 403.25], [1.7003913E12, 374.73333333333335], [1.70039064E12, 381.3666666666667], [1.7003907E12, 382.06666666666666], [1.700391E12, 373.6666666666667], [1.70039058E12, 380.85], [1.70039088E12, 382.05], [1.70039094E12, 230.73333333333332], [1.70039028E12, 256.7], [1.70039124E12, 374.76666666666665]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70039148E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.7003901E12, "maxY": 403.25, "series": [{"data": [[1.70039082E12, 382.1166666666667], [1.70039016E12, 392.81666666666666], [1.70039112E12, 380.53333333333336], [1.70039022E12, 384.28333333333336], [1.70039118E12, 377.06666666666666], [1.70039052E12, 385.8333333333333], [1.70039148E12, 145.55], [1.7003901E12, 11.65], [1.70039106E12, 379.28333333333336], [1.7003904E12, 395.53333333333336], [1.70039136E12, 373.6], [1.70039046E12, 390.21666666666664], [1.70039142E12, 372.31666666666666], [1.70039076E12, 382.26666666666665], [1.70039034E12, 403.25], [1.7003913E12, 374.73333333333335], [1.70039064E12, 381.3666666666667], [1.7003907E12, 382.06666666666666], [1.700391E12, 369.51666666666665], [1.70039058E12, 380.85], [1.70039088E12, 382.05], [1.70039094E12, 200.78333333333333], [1.70039028E12, 224.28333333333333], [1.70039124E12, 374.76666666666665]], "isOverall": false, "label": "logs-success", "isController": false}, {"data": [[1.70039022E12, 2.6666666666666665], [1.700391E12, 4.15], [1.70039148E12, 37.416666666666664], [1.70039094E12, 29.95], [1.70039028E12, 32.416666666666664]], "isOverall": false, "label": "logs-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70039148E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 2.6666666666666665, "minX": 1.7003901E12, "maxY": 403.25, "series": [{"data": [[1.70039082E12, 382.1166666666667], [1.70039016E12, 392.81666666666666], [1.70039112E12, 380.53333333333336], [1.70039022E12, 384.28333333333336], [1.70039118E12, 377.06666666666666], [1.70039052E12, 385.8333333333333], [1.70039148E12, 145.55], [1.7003901E12, 11.65], [1.70039106E12, 379.28333333333336], [1.7003904E12, 395.53333333333336], [1.70039136E12, 373.6], [1.70039046E12, 390.21666666666664], [1.70039142E12, 372.31666666666666], [1.70039076E12, 382.26666666666665], [1.70039034E12, 403.25], [1.7003913E12, 374.73333333333335], [1.70039064E12, 381.3666666666667], [1.7003907E12, 382.06666666666666], [1.700391E12, 369.51666666666665], [1.70039058E12, 380.85], [1.70039088E12, 382.05], [1.70039094E12, 200.78333333333333], [1.70039028E12, 224.28333333333333], [1.70039124E12, 374.76666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.70039022E12, 2.6666666666666665], [1.700391E12, 4.15], [1.70039148E12, 37.416666666666664], [1.70039094E12, 29.95], [1.70039028E12, 32.416666666666664]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70039148E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}


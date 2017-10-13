'use strict';
/**
 * `module_loader` iterates through the sub folders of `modules`
 * and tries to find a `module.json` in them, after which it
 * adds them to the `modules.json` file that the app uses to
 * load the addons.
 */

var runner = {
  init: function() {
    console.log('i am the runner addon');
  },

  buildDOM: function() {
    return `
    <div class="component-runner-splits">
      <table class="table">
        <tr>
          <td class="icon"><img src="icons/CJ.png" /></td>
          <td>Big Smoke</td>
          <td>
            <span>-0:32</span>
          </td>
          <td>00:03:27</td>
        </tr>
        <tr>
          <td class="icon"><img src="icons/BigSmoke.png" /></td>
          <td>Ryder</td>
          <td>
            <span>-0:14</span>
          </td>
          <td>00:05:52</td>
        </tr>
        <tr class="selected">
          <td class="icon"><img src="icons/Sweet.png" /></td>
          <td>Sweet</td>
          <td>
            <span>-0:06</span>
          </td>
          <td>00:09:13</td>
        </tr>
        <tr>
          <td class="icon"><img src="icons/CJ.png" /></td>
          <td>Big Smoke</td>
          <td>
            <span>-0:32</span>
          </td>
          <td>00:03:27</td>
        </tr>
        <tr>
          <td class="icon"><img src="icons/BigSmoke.png" /></td>
          <td>Ryder</td>
          <td>
            <span>-0:14</span>
          </td>
          <td>00:05:52</td>
        </tr>
        <tr>
          <td class="icon"><img src="icons/Sweet.png" /></td>
          <td>Sweet</td>
          <td>
            <span>-0:06</span>
          </td>
          <td>00:09:13</td>
        </tr>
        <tr>
          <td class="icon"><img src="icons/CJ.png" /></td>
          <td>Big Smoke</td>
          <td>
            <span>-0:32</span>
          </td>
          <td>00:03:27</td>
        </tr>
        <tr>
          <td class="icon"><img src="icons/BigSmoke.png" /></td>
          <td>Ryder</td>
          <td>
            <span>-0:14</span>
          </td>
          <td>00:05:52</td>
        </tr>
        <tr>
          <td class="icon"><img src="icons/Sweet.png" /></td>
          <td>Sweet</td>
          <td>
            <span>-0:06</span>
          </td>
          <td>00:09:13</td>
        </tr>
        <tr>
          <td class="icon"><img src="icons/CJ.png" /></td>
          <td>Big Smoke</td>
          <td>
            <span>-0:32</span>
          </td>
          <td>00:03:27</td>
        </tr>
        <tr>
          <td class="icon"><img src="icons/BigSmoke.png" /></td>
          <td>Ryder</td>
          <td>
            <span>-0:14</span>
          </td>
          <td>00:05:52</td>
        </tr>
        <tr>
          <td class="icon"><img src="icons/Sweet.png" /></td>
          <td>Sweet</td>
          <td>
            <span>-0:06</span>
          </td>
          <td>00:09:13</td>
        </tr>
        <tr>
          <td class="icon"><img src="icons/CJ.png" /></td>
          <td>Big Smoke</td>
          <td>
            <span>-0:32</span>
          </td>
          <td>00:03:27</td>
        </tr>
        <tr>
          <td class="icon"><img src="icons/BigSmoke.png" /></td>
          <td>Ryder</td>
          <td>
            <span>-0:14</span>
          </td>
          <td>00:05:52</td>
        </tr>
        <tr>
          <td class="icon"><img src="icons/Sweet.png" /></td>
          <td>Sweet</td>
          <td>
            <span>-0:06</span>
          </td>
          <td>00:09:13</td>
        </tr>
        <tr>
          <td class="icon"><img src="icons/CJ.png" /></td>
          <td>Big Smoke</td>
          <td>
            <span>-0:32</span>
          </td>
          <td>00:03:27</td>
        </tr>
        <tr>
          <td class="icon"><img src="icons/BigSmoke.png" /></td>
          <td>Ryder</td>
          <td>
            <span>-0:14</span>
          </td>
          <td>00:05:52</td>
        </tr>
        <tr>
          <td class="icon"><img src="icons/Sweet.png" /></td>
          <td>Sweet</td>
          <td>
            <span>-0:06</span>
          </td>
          <td>00:09:13</td>
        </tr>
      </table>
    </div>

    <div class="component-runner-timer">
      <div class="timer">1:29:14</div>
    </div>

    <div class="component-runner-title">

    </div>
    `;
  }
}

module.exports = runner;

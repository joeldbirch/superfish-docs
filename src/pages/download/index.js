import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { FaDownload } from "react-icons/fa"

const IndexPage = () => (
  <Layout>
    <SEO title="Download and Support" keywords={[`jQuery`, `Superfish`, `Menu`, `Plugin`, `Download`, `Support`]} />

    <section id="download" className="section  content">
			<h1>Download</h1>

			<h2>Download the Zip archive:</h2>
			<p>You can <strong><a href="https://github.com/joeldbirch/superfish/archive/master.zip"><FaDownload style={{ marginRight: '.25em' }} />download a zip archive</a></strong> of everything you need.</p>

			<h2>Download from GitHub:</h2>
			<p>The <a href="https://github.com/joeldbirch/superfish/" className="external">canonical version of Superfish lives on GitHub</a>. There you can browse the files, clone, fork and star the project, submit issues if you find them, and so on.</p>

			<h2>Install via Bower package manager:</h2>
			<p>If you have the <a href="https://bower.io" className="external"> Bower package manager</a> installed, you can install Superfish into your project from the command line by running: <code className="language-markup">bower install superfish</code></p>
			<p>If you install Superfish using this method only the files you really need are installed without the various project maintenance litter (package.json, etc).</p>

			<h2>Install via Node Package Manager (NPM):</h2>
			<p>If you prefer to use NPM, install via <code className="language-markup">npm install superfish</code></p>
		</section>
		<section id="support" className="section  content">
			<h1>Support</h1>
			<p>If you need help with the jQuery/JavaScript aspect of the plugin, post a message to the <a className="external" href="http://forum.jquery.com/">jQuery Forum</a> with the word “Superfish” somewhere in the subject line. There are many Superfish users on the forum who may be able to help you.</p>
			<p>If your issues are related to styling, try posting your questions to a dedicated CSS forum or Stack Exchange. CSS for Superfish is mainly just traditional Suckerfish-style dropdown menu code so there are plenty of resources out there to learn from.</p>
			<p>Demonstrable bugs with the JavaScript component of the Superfish plugin can be <a className="external" href="https://github.com/joeldbirch/superfish/issues/">reported via GitHub</a>.</p>

			<div className="notification box" id="premium-support">
				<h2>Premium Support</h2>
				<p>Still having trouble and tired of waiting for vague answers on public forums? Make a AU$50 payment (using the "Buy Now" button below) and receive the immediate* attention and advice of the Superfish author (that's me, Joel Birch). I'll take a look at your issue and advise accordingly. Or, pay AU$100 for my immediate* attention plus one hour of my time if you think your issue will require it. Consider adding your Skype username to the payment note. Upon receipt of payment I will email or Skype <abbr title="Instant Message">IM</abbr> you (as soon as possible) to request details of where I can see your Superfish menu and a description of the issue you require my help to solve. </p>

				<p><em><strong>* Please note:</strong> "Immediate" means "as soon as possible, given that my timezone may differ greatly from yours".</em></p>

				<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
					<input type="hidden" name="cmd" value="_s-xclick" />
					<input type="hidden" name="hosted_button_id" value="Z4QLYLSAVXTKE" />
					<table>
						<tbody>
              <tr><td><input type="hidden" name="on0" value="Support Option" /><strong>Support Option:</strong></td></tr>
              <tr><td><select name="os0">
                <option value="Superfish Support">Superfish Support $50.00 AUD</option>
                <option value="Superfish Support+">Superfish Support+ $100.00 AUD</option>
                </select>
              </td></tr>
            </tbody>
					</table>
					<input type="hidden" name="currency_code" value="AUD" />
					<input type="image" src="https://www.paypalobjects.com/en_AU/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal — The safer, easier way to pay online." />
					<img alt="" border="0" src="https://www.paypalobjects.com/en_AU/i/scr/pixel.gif" width="1" height="1" />
				</form>
			</div>
		</section>

  </Layout>
)

export default IndexPage

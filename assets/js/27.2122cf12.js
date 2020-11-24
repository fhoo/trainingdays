(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{438:function(t,e,r){t.exports=r.p+"assets/img/vnetpeeringarchitecture.9cfb28ed.png"},439:function(t,e,r){t.exports=r.p+"assets/img/deploytoazure.e0e5d477.png"},440:function(t,e,r){t.exports=r.p+"assets/img/armdeploymentresult.9be38aa5.png"},441:function(t,e,r){t.exports=r.p+"assets/img/vnetpeeringsettings.7e68a907.png"},442:function(t,e,r){t.exports=r.p+"assets/img/vnetpeeringtest.ed5c5417.png"},756:function(t,e,r){"use strict";r.r(e);var n=r(42),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"challenge-9-networking-connect-two-virtual-networks-using-azure-vnet-peering"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#challenge-9-networking-connect-two-virtual-networks-using-azure-vnet-peering"}},[t._v("#")]),t._v(" Challenge 9: Networking: Connect Two Virtual Networks Using Azure VNET Peering")]),t._v(" "),n("p",[n("RouterLink",{attrs:{to:"/day1/"}},[t._v("back")])],1),t._v(" "),n("h2",{attrs:{id:"here-is-what-you-will-learn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn"}},[t._v("#")]),t._v(" Here is what you will learn")]),t._v(" "),n("ul",[n("li",[t._v("How to connect 2 virtual networks with Azure VNET Peering")])]),t._v(" "),n("p",[t._v("Our "),n("strong",[t._v("final architecture")]),t._v(" should look like this:\n"),n("img",{attrs:{src:r(438),alt:"Final architecture"}}),n("br"),t._v("\nAt "),n("strong",[t._v("first")]),t._v(" you will deploy the "),n("em",[t._v("start environment")]),t._v(" and in the "),n("strong",[t._v("second")]),t._v(" step you will implement the "),n("strong",[t._v("peering")]),t._v(".")]),t._v(" "),n("h2",{attrs:{id:"_1-deploy-the-starting-point"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-deploy-the-starting-point"}},[t._v("#")]),t._v(" 1. Deploy the 'starting point'")]),t._v(" "),n("p",[t._v("In this directory there is an ARM-template which 2 virtual networks and 2 vms and its requirements (networking, disks,...).:")]),t._v(" "),n("p",[n("strong",[t._v("Deploy this scenario")]),t._v(" into your subscription by clicking on the\n"),n("a",{attrs:{href:"https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fazuredevcollege%2Ftrainingdays%2Fmaster%2Fday1%2Fchallenges%2FChallenge9%2FChallenge9Start.json"}},[n("img",{attrs:{src:r(439)}})]),t._v("\nbutton.")]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Value")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Resource group")]),t._v(" "),n("td",[n("strong",[t._v("(new)")]),t._v(" rg-VNETPeering")])]),t._v(" "),n("tr",[n("td",[t._v("Location")]),t._v(" "),n("td",[n("strong",[t._v("North Europe")])])]),t._v(" "),n("tr",[n("td",[t._v("Admin user")]),t._v(" "),n("td",[t._v("demouser")])]),t._v(" "),n("tr",[n("td",[t._v("Admin password")]),t._v(" "),n("td",[n("strong",[n("em",[t._v("some complex value")])])])]),t._v(" "),n("tr",[n("td",[t._v("Vm Size")]),t._v(" "),n("td",[n("strong",[t._v("Standard_B2s")]),t._v("  or try e.g. "),n("strong",[t._v("Standard_F2s_v2")])])]),t._v(" "),n("tr",[n("td",[t._v("Disk Sku")]),t._v(" "),n("td",[t._v("StandardSSD_LRS")])])])]),t._v(" "),n("p",[t._v("The result should look similar to this:"),n("br"),t._v(" "),n("img",{attrs:{src:r(440),alt:"Deployment result"}})]),t._v(" "),n("h2",{attrs:{id:"_2-implement-the-vnet-peering"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-implement-the-vnet-peering"}},[t._v("#")]),t._v(" 2. Implement the VNET peering")]),t._v(" "),n("p",[t._v("You need to create the peerings on each virtual network:")]),t._v(" "),n("ul",[n("li",[t._v("VNET1 ---\x3e VNET2")]),t._v(" "),n("li",[t._v("VNET2 ---\x3e VNET1")])]),t._v(" "),n("p",[t._v("The wizard in the portal is "),n("em",[t._v("smart enough")]),t._v(" to let create 2 peerings in a single step. Select e.g. VNET1 as starting point:")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('[Azure Portal] -> Resource Groups -> "rg-VNETPeering" -> "VNET1" -> Peerings -> Add\n')])])]),n("table",[n("thead",[n("tr",[n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Value")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("strong",[t._v("This")]),t._v(" virtual network - Peering link name")]),t._v(" "),n("td",[n("strong",[t._v("VNET1-to-VNET2")])])]),t._v(" "),n("tr",[n("td",[t._v("Virtual Network ("),n("em",[t._v("to peer with")]),t._v(")")]),t._v(" "),n("td",[n("strong",[t._v("VNET2")])])]),t._v(" "),n("tr",[n("td",[n("strong",[t._v("Remote")]),t._v(" virtual network - Peering link name")]),t._v(" "),n("td",[n("strong",[t._v("VNET2-to-VNET1")])])])])]),t._v(" "),n("p",[n("img",{attrs:{src:r(441),alt:"VNET Peering settings"}})]),t._v(" "),n("h2",{attrs:{id:"_3-check-if-the-peering-works"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-check-if-the-peering-works"}},[t._v("#")]),t._v(" 3. Check if the peering works")]),t._v(" "),n("p",[t._v("Connect to one vm through RDP using its public ip address: e.g. VMonVNET1 through")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v('[Azure Portal] -> Virtual Machines -> "VMonVNET1" -> Connect\n')])])]),n("p",[n("strong",[t._v("User")]),t._v(": demouser"),n("br"),t._v(" "),n("strong",[t._v("PWD")]),t._v(": %your deployment password%")]),t._v(" "),n("p",[n("strong",[t._v("Open a command prompt and ping the other vm")]),t._v(" using its internal IP: In our case VMonVNET2 - should be 192.168.100.4:"),n("br"),t._v(" "),n("img",{attrs:{src:r(442),alt:"VNET Peering ping test"}})]),t._v(" "),n("h2",{attrs:{id:"cleanup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cleanup"}},[t._v("#")]),t._v(" Cleanup")]),t._v(" "),n("p",[n("strong",[t._v("Delete the resource group")]),t._v(" "),n("em",[t._v("rg-VNETPeering")])]),t._v(" "),n("p",[n("RouterLink",{attrs:{to:"/day1/"}},[t._v("back")])],1)])}),[],!1,null,null,null);e.default=s.exports}}]);
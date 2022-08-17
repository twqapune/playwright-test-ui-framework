# Project Setup

Create SSH key: `ssh-keygen -t rsa -C "Email Id" -b 4096` \
Open the file "id_rsa.pub" which has the public key and copy the contents. \
Go to [page](https://github.com/settings/keys) and add your key. Check with Git owners for more details.

To read more about the [SSH key creation](https://confluence.atlassian.com/bitbucketserver/creating-ssh-keys-776639788.html)

Once SSH key id is created, you can clone the project to your local machine using: `git clone git@github.com:twqapune/playwright-test-ui-framework.git`

For more information on [git commands](https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html)

Note: Remove `.gitkeep` file from folders once we start adding files in the folder.
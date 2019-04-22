# Redux-practice

make .nvmrc file and add your desired node version
install nvm

To change the git commit message follow the below steps
.
Step1: git rebase -i HEAD~n to do interactive rebase for the last n commits affected.

git will pop up an editor to handle those commits, notice this command: # r, reword = use commit, but edit the commit message, that is exactly we need.

Step2: change pick to r for those commits that you want to update the msg. Save and close the editor.

Step3: in the following commit files, update the commit msg as you like

Step4: after all commits msgs are updated. you might want to do git push -f to update the remote.

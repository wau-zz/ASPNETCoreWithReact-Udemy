To get the app running:

- in root folder of project, run 'npm install' to get node_modules installed.
- in root folder of project, run 'dotnet tool install --gloval dotnet-ef' to install dotnet entity framework if machine doesn't already have it.
- in root folder of project, run 'dotnet ef migrations add InitialCreate -p Persistence/ -s API/' to generate the entity framework initial DB migration (i.e. - _InitialCreate.cs ) support files.
- in root folder of project, run 'dotnet ef migrations add SeedValues -p Persistence/ -s API/' to generate the entity framework initial DB migration (i.e. - _SeedData.cs files) support files.
- in root folder of project, run 'dotnet run -p API/' or 'dotnet watch -p API/ run'.
- 
- navigate to client-app folder, run 'npm start run' to start the react front end app ;)

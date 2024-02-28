package io.ionic.starter;

import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;

import androidx.core.view.ViewCompat;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    Window window = getWindow();
    View decorView = window.getDecorView();
    window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
    window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
    WindowCompat.setDecorFitsSystemWindows(window, false);
    ViewCompat.setOnApplyWindowInsetsListener(decorView, (v, insets) -> {
      int navigationBarHeight = insets.getInsets(WindowInsetsCompat.Type.navigationBars()).bottom;
      v.setPadding(v.getPaddingLeft(), v.getPaddingTop(), v.getPaddingRight(), navigationBarHeight);
      return insets.inset(v.getPaddingLeft(), v.getPaddingTop(), v.getPaddingRight(), navigationBarHeight);
    });
  }
}
